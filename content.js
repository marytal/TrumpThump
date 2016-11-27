// content.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      // console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": "http://numbersapi.com/" + Math.floor((Math.random() * 1000))});
    }

    chrome.runtime.sendMessage({"message": "refresh"}, function(response) {
      console.log(response);
    });

  }
);

function TrumpClintonSwitch() {
  doc_body = document.body
  doc_body.innerHTML = doc_body.innerHTML.replace(/(Donald J\. Trump)|(Donald John Trump)|(Donald Trump)|(Donald)|(Trump)/ig, "the Orange One")
  doc_body.innerHTML = doc_body.innerHTML.replace(/(Hillary Diane Rodham Clinton)|(Hillary Clinton)|(Hillary)|(Clinton)/ig, "Donald Trump")
}

function randomFact() {
  $.get("https://api.chucknorris.io/jokes/random", function(response) {
    var fact = response["value"]
    alert(fact)
  })

}

TrumpClintonSwitch()



window.setTimeout(function(){
  randomFact()
}, 4000);





$.get("https://api.whatdoestrumpthink.com/api/v1/quotes", function(response) {
  dTrumpTalk = response["messages"]["non_personalized"][Math.floor((Math.random() * 46))]
  console.log(dTrumpTalk);

  $("a").css("color","red");
  $("a").css("font-size", "6px");

  pTrumpTalk = document.createElement('p');
  pTrumpTalk.innerHTML = dTrumpTalk
  document.body.append(pTrumpTalk)

})
