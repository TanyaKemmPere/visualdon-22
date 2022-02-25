var etatCouleur = document.getElementById("rect").className;
function changementCouleur(el)
{
  if(etatCouleur.baseVal == "rouge")
  {
    el.style.fill = "green";
    document.getElementById("rect").classList.remove("rouge");
    document.getElementById("rect").classList.add("vert");
  }
  else
  { 
    el.style.fill = "red";
    document.getElementById("rect").classList.remove("vert");
    document.getElementById("rect").classList.add("rouge");
  }
}