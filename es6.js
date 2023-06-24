document.getElementById('btn-apply').addEventListener('click',function(){




    const Value=document.getElementsByClassName('friend');
    for( const friend of Value){

        console.log(friend);

     friend.style.backgroundColor='lightblue';


     friend.style.color='green';

     
    }
})
document.getElementById('new-btn').addEventListener('click',function(){



    console.log('Connected');
  const friendContainer=  document.getElementById('friend');
  
  const friend=document.createElement('div');
  friend.classList.add('friend');
  friend.innerHTML= `
  
  <h3 class="friend-name">Friend-4</h3>
                <p>Quos pariatur amet rerum ipsam dolorum quae excepturi quaerat porro ducimus reprehenderit earum eos
                    architecto nemo, aliquam odit tempore maxime!</p>
  
  
  `;

  friendContainer.appendChild(friend);
})


 