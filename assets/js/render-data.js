var render_data = function () {
    var onLoad = function () {
        renderWinners();
        renderRunners();
        renderTeamsList();
        renderTeamAndPlayers();
    }
    var renderWinners = function () {
        $(".winner-name").text(winners.name);
        $('.winner-image').attr('src', winners.image);
    }
    var renderRunners = function () {
        $(".runner-name").text(runners.name);
        $('.runner-image').attr('src', runners.image)

    }
    var renderTeamsList = function () {
        let finalTeams = '';
        teamsList.map((team, index) => {
            let teamData = '<div class="col-lg-3 col-md-4 mt-4"><div class="icon-box"><i class="ri-store-line" style="color: #ffbb2c;"></i><h3><a href="">' + team.team_name + '</a></h3></div></div>'
            finalTeams = finalTeams + teamData;
        });
        $('.team-data-container').html(finalTeams);
    }
    
    var renderTeamHeaders = function () {
        let initialHeader = '<li data-filter="*" class="filter-active">All</li>';
        teamsList.map((team, index) => {
            let teamHeader = '<li data-filter=".player-team-' + team.team_id + '">'+ team.team_name  +'</li>';
            initialHeader = initialHeader + teamHeader;
        });
        $('#portfolio-flters').html(initialHeader)
        
    }
    var renderTeamAndPlayers = function () {
        renderTeamHeaders();
        renderPlayers();
        renderWinnerAndRunnerPlayers();
    }
    var renderPlayers = function () {
        let allPlayers = '';
        playersList.map((player, index) => {
            if (player.player_pic === null) {
                player.player_pic = 'assets/img/team/unknown-r.png'
            }
            let playerHtml = '<div class="col-lg-4 col-md-6 portfolio-item player-team-' + player.team_id + '"><div class="portfolio-wrap"><img src="' + player.player_pic + '" class="img-fluid" alt=""><div class="portfolio-info"><h4>' + player.player_name + '</h4><p>' + player.team_name + '</p></div></div></div>'
            allPlayers = allPlayers + playerHtml
        });
        $('.portfolio-container').html(allPlayers)
    }

   /* var renderWinnerAndRunnerPlayers = function () {
            let allPlayers = '';
            yearList.map((player, index) => {
                let playerHtml = '<div class="col-lg-4 col-md-6 portfolio-item player-team-' + player.year + '"><div class="portfolio-wrap"><img src="' + player.image + '" class="img-fluid" alt=""><div class="portfolio-info"><h4>' + player.name + '</h4><p>' + player.team_name + '</p></div></div></div>'
                allPlayers = allPlayers + playerHtml
            });
            $('.portfolio-container').html(allPlayers)
        }*/
    return {
        init: onLoad()
    }
}();
render_data.init();
