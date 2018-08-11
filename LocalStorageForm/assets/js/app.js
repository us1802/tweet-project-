//variables
const tweetList = document.getElementById('tweet-list');



//event listeners
eventListener();


function eventListener(){

    document.querySelector('#form').addEventListener('submit', newTweet);
    document.querySelector('#form').addEventListener('keydown', newTweetenter);
    tweetList.addEventListener('click', removeTweet);
    document.addEventListener('DOMContentLoaded', LocalStorageOnLoad);
}


//function
function newTweetenter(e){
   

    const key = e.keyCode;
    if (13 == key) { // 13 is enter
        const tweet = document.getElementById('tweet').value;

        //create remove button
        if(tweet==""){
            alert("plz enter something!!!");
        }
        else{
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X'
   
        //create tweet
        const li = document.createElement('li');
        li.textContent = tweet;
   
        //add remove button to li
        li.appendChild(removeBtn);
   
        //add li to tweetlist
        tweetList.appendChild(li);
   
        addTweetLocalStorage(tweet);
       let a = document.getElementById('tweet');
       a.value = a.defaultValue;
    }
}





}

function newTweet(e){
     e.preventDefault();

     const tweet = document.getElementById('tweet').value;

     //create remove button

     const removeBtn = document.createElement('a');
     removeBtn.classList = 'remove-tweet';
     removeBtn.textContent = 'X'

     //create tweet
     const li = document.createElement('li');
     li.textContent = tweet;

     //add remove button to li
     li.appendChild(removeBtn);

     //add li to tweetlist
     tweetList.appendChild(li);

     addTweetLocalStorage(tweet);



}
function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    }

    RemoveTweetLocalStorage(e.target.parentElement.textContent);
   

}
 
function addTweetLocalStorage(tweet){
    let tweets = getTweetsFromLocalStorage();

    tweets.push(tweet);

    localStorage.setItem('tweets',JSON.stringify(tweets));
 



}

function getTweetsFromLocalStorage(){

     let tweets;
     let tweetls = localStorage.getItem('tweets');

     if(tweetls===null){
         tweets = [];
     }
     else{
         tweets = JSON.parse(tweetls);
     }

     return tweets;

}
//prints local storage tweets on load
function LocalStorageOnLoad(){
    let tweets = getTweetsFromLocalStorage();

    tweets.forEach(function(tweet) {
        const removeBtn = document.createElement('a');
     removeBtn.classList = 'remove-tweet';
     removeBtn.textContent = 'X'

     //create tweet
     const li = document.createElement('li');
     li.textContent = tweet;

     //add remove button to li
     li.appendChild(removeBtn);

     //add li to tweetlist
     tweetList.appendChild(li);
        
    });


}

//remove tweet from local storage

function RemoveTweetLocalStorage(tweet){

    let tweets = getTweetsFromLocalStorage();

    //remove X from the end
    const tweetDelete = tweet.substring(0,tweet.length-1);

    //loop through tweets and remove the tweets that are equal

    tweets.forEach(function(tweetls,index){
        if(tweetDelete===tweetls){
            tweets.splice(index,1);


        }

    });
    //save data

    localStorage.setItem('tweets',JSON.stringify(tweets));



}

