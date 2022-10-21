let holidayName;
let holidayDescriptions;
accessHoliday();
display();
//showDescription();
accessHolidayDescription();

// function helloThere()
// {
//     let name = document.querySelector("#nameBox").value;
//     let nameOutput = document.querySelector("#nameOutput");
//     nameOutput.innerHTML = `Hello, ${name}!`
// }

function display()
{
    let userChoice;
    let radioButtons = document.querySelectorAll('input[name="interestingHoliday"]');
    for (let radioButton of radioButtons) {
        
            userChoice = radioButton.value;
           
            
            if (radioButton.checked) {
                holidayDescriptions.response.holidays.forEach(holidays => {
                    if (userChoice == holidays.name) {
                        //console.log(movie.title);
                        let nameOutput = document.querySelector("#nameOutput");
                        let textNode = document.createTextNode(holidays.description);
                        nameOutput.appendChild(textNode);
                        //document.querySelector("#nameOutput").innerHTML="";
                        document.querySelector("#nameOutput").insertAdjacentElement("afterbegin", nameOutput);
                      }
            })
            // let newElt = document.createElement("td");
            // let textNode = document.createTextNode(holidays.name + ": " + holidays.description);
            // nameOutput.appendChild(textNode);
            // document.querySelector("#nameOutput").innerHTML="";
            // document.querySelector("#nameOutput").appendChild(nameOutput);
            nameOutput.innerHTML = `You selected ${userChoice}`;
            break;
            }
        }
    }

function accessHoliday()
{
    const request = new XMLHttpRequest();
    request.open("GET","https://holidayapi.com/v1/holidays?pretty&key=84e4b384-ebd5-49e4-922f-8614fe302d49&country=US&year=2021", true);

    request.onload = function() {
        holidayName = JSON.parse(this.response);
        console.log(holidayName);
        if (request.status == 200)
        {
            console.log("Response OK.")
            holidayName.holidays.forEach(x => console.log(x))

            holidayName.holidays.forEach(holidays => {
                let newElt = document.createElement("option");
                let textNode = document.createTextNode(holidays.name);
                newElt.appendChild(textNode);
                document.querySelector("#holidaySelection").appendChild(newElt);
            }
            );   
        }
    else
    {
        console.log(`Error occurred: Status: ${request.status}`);
    }
 };
 request.send();
}

    function accessHolidayDescription()
   {
    const request = new XMLHttpRequest();
    request.open("GET","https://calendarific.com/api/v2/holidays?api_key=e835e5e6c60697945c1296bc465c162f740165a9&country=US&year=2021", true);

    request.onload = function() {
        holidayDescriptions = JSON.parse(this.response);
        //console.log(holidayName);
        //console.log(`Holidays: ${holidays.name}`);
        if (request.status == 200)
        {
            console.log("Response OK.")

            holidayDescriptions.response.holidays.forEach(holidays => {
                if (holidays.name == document.querySelector("#holidaySelection").value) {
                    //console.log(movie.title);
                    let newElt = document.createElement("td");
                    let textNode = document.createTextNode(holidays.name + ": " + holidays.description);
                    newElt.appendChild(textNode);
                    document.querySelector("#holidayDescription").innerHTML="";
                    document.querySelector("#holidayDescription").appendChild(newElt);
                  }
        })
    }
        else
        {
            console.log(`Error occurred: Status: ${request.status}`);
        }
    };
    request.send();
    
}

// function displayHoliday()
// {
//     data.response.holidays.forEach(x =>
//     {
//         if (document.querySelector("#holidayDisplay").value == x.holidays) {
//             console.log(x.holidays);
//             let newElt = document.createElement("p");
//             let textNode = document.createTextNode(`${data.response}`);
//             newElt.appendChild(textNode);
//             document.querySelector("#placeHolder").innerHTML="";
//             document.querySelector("#placeHolder").appendChild(newElt);
//         }
//     }
//  )
// }


