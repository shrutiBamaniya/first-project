let data = [80,30,120,60,150,40,100];
function displayBars()
{
	let container=document.getElementById("container");
        container.innerHTML = "";

	for(let i=0; i<data.length; i++)
          {
            let bar=document.createElement("div");
	    bar.className="bar";
	    bar.style.height=data[i] * 2 + "px";
	    bar.innerHTML=data[i];
	    container.appendChild(bar);
          }
}
function fetchData()

{
	displayBars();

        setTimeout(sortBars,200);
}

async function sortBars()
{
	for(let i=0; i<data.length-1; i++)
	   {
              for(let j=0; j<data.length-i-1; j++)
                 {
                    if(data[j]>data[j+1]) 
                      {
                           let temp = data[j];
			   data[j]=data[j+1];
			   data[j+1]=temp;
displayBars();

  await new Promise(resolve=>
  setTimeout(resolve,500));
                             }
                       }
                }

      alert ("Data sorted successfully");
}