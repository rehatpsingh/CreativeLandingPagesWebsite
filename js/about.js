document.getElementById('learn-more-btn').addEventListener('click', function () {
  var teamTable = document.getElementById('team-table');
  if (teamTable.style.display === 'none' || teamTable.style.display === '') {
    teamTable.style.display = 'table';
    setTimeout(function () {
      teamTable.style.opacity = '1';
    }, 10);
  } else {
    teamTable.style.opacity = '0';
    setTimeout(function () {
      teamTable.style.display = 'none';
    }, 600);
  }
});

