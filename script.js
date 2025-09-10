// Dark mode toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);
});

// Custom form handling
const form = document.getElementById("customForm");
const output = document.getElementById("customOutput");
const downloadBtn = document.getElementById("downloadProfile");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("visitorName").value;
  const note = document.getElementById("visitorNote").value;

  output.innerHTML = `<p><b>${name}</b> says: "${note}"</p>`;
});

// Download profile data
downloadBtn.addEventListener("click", () => {
  const data = {
    name: "Antony Kevin",
    email: "antokevin12072007@gmail.com",
    college: "Don Bosco College, Yelagiri Hills (2024-2027)",
    skills: ["Film Making", "Python", "C++", "HTML", "CSS", "Debugging", "Communication", "Leadership"],
    projects: ["Voting System in Python", "Portfolio Website", "Short Film Projects"],
  };
  const visitorNote = document.getElementById("visitorNote").value;
  if(visitorNote) data.visitorNote = visitorNote;

  const blob = new Blob([JSON.stringify(data, null, 2)], {type: "application/json"});
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "AntonyKevin_Profile.json";
  link.click();
});
