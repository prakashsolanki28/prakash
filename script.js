$('#menu_btn').click(function()
{
	let val = document.getElementById('side_pannel');
	if(val.style.left=="-256px")
	{
		val.style.left="0px";
	}
	else
	{
		val.style.left="-256px"
	}
});
