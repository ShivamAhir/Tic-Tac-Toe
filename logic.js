var arr=["one","two","three","four","five","six","sev","eig","nin"];
var X=3;
var count=0;
function Start_game(){
    X=1;
    count=0;
    document.getElementById("notice").innerHTML="It's X turn";
    for(let i=0;i<9;i++)
    {
        document.getElementById(arr[i]).value="";
        document.getElementById(arr[i]).style.backgroundColor="";
    }
    document.getElementById("body").style.backgroundColor="white";
}
function Myreset(){
    count=0;
    document.getElementById("notice").innerHTML="Start game";
    for(let i=0;i<9;i++)
    {
        document.getElementById(arr[i]).value="";
        document.getElementById(arr[i]).style.backgroundColor="";
    }
    document.getElementById("body").style.backgroundColor="white";
   
}
function whowin(box)
{
    if(document.getElementById("one").value==box && document.getElementById("four").value==box && document.getElementById("sev").value==box)
    {
        document.getElementById("one").style.backgroundColor="red";
        document.getElementById("four").style.backgroundColor="red";
        document.getElementById("sev").style.backgroundColor="red";
        return true;
    }
    //second col
    else if(document.getElementById("two").value==box && document.getElementById("five").value==box && document.getElementById("eig").value==box)
    {
        document.getElementById("two").style.backgroundColor="red";
        document.getElementById("five").style.backgroundColor="red";
        document.getElementById("eig").style.backgroundColor="red";
        return true;
    }
    //third col
    else if(document.getElementById("three").value==box && document.getElementById("six").value==box && document.getElementById("nin").value==box)
    {
        document.getElementById("three").style.backgroundColor="red";
        document.getElementById("six").style.backgroundColor="red";
        document.getElementById("nin").style.backgroundColor="red";
        return true;
    }
     // first row
    else if(document.getElementById("one").value==box && document.getElementById("two").value==box && document.getElementById("three").value==box)
    {
        document.getElementById("one").style.backgroundColor="red";
        document.getElementById("two").style.backgroundColor="red";
        document.getElementById("three").style.backgroundColor="red";
        return true;
    }
    //second row
    else if(document.getElementById("four").value==box && document.getElementById("five").value==box && document.getElementById("six").value==box)
    {
        document.getElementById("five").style.backgroundColor="red";
        document.getElementById("four").style.backgroundColor="red";
        document.getElementById("six").style.backgroundColor="red";
        return true;
    }
    //third row
    else if(document.getElementById("sev").value==box && document.getElementById("eig").value==box && document.getElementById("nin").value==box)
    {
        document.getElementById("nin").style.backgroundColor="red";
        document.getElementById("eig").style.backgroundColor="red";
        document.getElementById("sev").style.backgroundColor="red";
        return true;
    }
    //first dia
    else if(document.getElementById("one").value==box && document.getElementById("five").value==box && document.getElementById("nin").value==box)
    {
        document.getElementById("one").style.backgroundColor="red";
        document.getElementById("five").style.backgroundColor="red";
        document.getElementById("nin").style.backgroundColor="red";
        return true;
    }
    //second dia
    else if(document.getElementById("three").value==box && document.getElementById("five").value==box && document.getElementById("sev").value==box)
    {
        document.getElementById("three").style.backgroundColor="red";
        document.getElementById("five").style.backgroundColor="red";
        document.getElementById("sev").style.backgroundColor="red";
        return true;
    }
    else
    return false;
}

function Myturn(box){
    if(document.getElementById(box).value=="")
    {
        if(X===1)
        {
            document.getElementById(box).value="X";
            X=0;
            count++;
            if(whowin("X"))
            {
                document.getElementById("notice").innerHTML="X win!!";
                document.getElementById("body").style.backgroundColor="green";
            }
            else if(count==9)
            {
                document.getElementById("notice").innerHTML="Match Drawn";
                document.getElementById("body").style.backgroundColor="red";
            }
            else 
            document.getElementById("notice").innerHTML="It's O turn";
        }
        else if(X===0)
        {
            document.getElementById(box).value="O";
            X=1;
            count++;
            if(whowin("O"))
            {
                document.getElementById("notice").innerHTML="O win!!";
                document.getElementById("body").style.backgroundColor="green";
            }
            else if(count==9)
            {
                document.getElementById("notice").innerHTML="Match Drawn";
                document.getElementById("body").style.backgroundColor="red";
            }
            else 
            document.getElementById("notice").innerHTML="It's X turn";
        }

    }
}
