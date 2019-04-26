$(".messages").animate({ scrollTop: $(document).height() }, "fast");

$('.sendbutton').on('mousedown', function(e) {
		sendMessage();
});
$(window).on('keydown', function(e) {
  if (e.which == 13) {
    sendMessage();
    return false;
  }
});

function sendMessage() {
    message = $(".message-input input").val();
    name = $(".username-input input").val();
	if($.trim(message) == '') {
		return false;
	}
	$('.message-input input').val(null);

	socket.emit("spotim/chat", {avatar: "...",username:name,text:message});
	return true;

};

function displayMessage(data) {
	if ($(".username-input input").val()==data.username) {
		$('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + data.text + "<br/>- " + data.username + '</p></li>').appendTo($('.messages ul'));
	} else {
		$('<li class="replies"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + data.text + "<br/>- " + data.username + '</p></li>').appendTo($('.messages ul'));
	}
	$(".messages").animate({ scrollTop: $(document).height() }, "fast");
}



const socket = io("https://spotim-demo-chat-server.herokuapp.com");
socket.on("connect", function() {
  console.log("connected to chat server!");
});
socket.on("disconnect", function() {
  console.log("disconnected from chat server!");
});
/* Received Message */
socket.on("spotim/chat", function(data) {
	console.log(data);
	displayMessage(data);
});
