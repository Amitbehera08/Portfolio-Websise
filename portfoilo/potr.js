<script>
function aiSearch() {
  let q = document.getElementById("aiInput").value.toLowerCase();
  let output = "";

  if (q.includes("who") || q.includes("amit")) {
    output = "Amit Omprakash Behera is a web developer skilled in frontend and data analysis.";
  } 
  else if (q.includes("skills")) {
    output = "Skills: HTML, CSS, JavaScript, React, Python, Data Analysis.";
  } 
  else if (q.includes("project")) {
    output = "Projects include E-Commerce Website, Corona Doses Analysis, House Price Prediction, Titanic Data Analysis.";
  } 
  else if (q.includes("contact")) {
    output = "Email: amitbehera223689@gmail.com | Phone: +91 7846959767";
  } 
  else {
    output = "Sorry 🤖 I don't understand that yet.";
  }

  document.getElementById("aiOutput").innerText = output;
}
</script>
