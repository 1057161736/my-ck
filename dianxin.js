// JavaScript Document
function mouseup3()
{
	document.getElementById("foot_title3").onclick=function()
	{
		document.getElementById("hzhb_a").style.display="block";
		document.getElementById("foot_title1").style.display="none";
		document.getElementById("foot_title2").style.display="block";
		document.getElementById("foot_title3").style.display="none";
		document.getElementById("foot_list1").style.display="none";
		document.getElementById("foot_title4").style.display="block";
		
		}
	}
	function mouseup2()
{
	document.getElementById("foot_title2").onclick=function()
	{
		document.getElementById("hzhb_a").style.display="none";
		document.getElementById("foot_title4").style.display="none";
		document.getElementById("foot_title1").style.display="block";
		document.getElementById("foot_title3").style.display="block";
		document.getElementById("foot_title2").style.display="none";
		document.getElementById("foot_list1").style.display="block";
		
		}
	}
	function xia()
	{
		document.getElementById("xia").onclick=function()
		{
			document.getElementById("shu4").style.display="block";
			document.getElementById("last").style.display="block";
			document.getElementById("xia").style.display="none";
			document.getElementById("shang").style.display="block";
			}
		}
		function shang()
	{
		document.getElementById("shang").onclick=function()
		{
			document.getElementById("shu4").style.display="none";
			document.getElementById("last").style.display="none";
			document.getElementById("xia").style.display="block";
			document.getElementById("shang").style.display="none";
			}
		}
	function closed()
	{
		document.getElementById("close").onclick=function()
		{
			document.getElementById("rightfix").style.display="none";
			
			}
		}
	function sbz2()
	{
		document.getElementById("sbz2").onclick=function()
		{
			document.getElementById("scp1").style.display="none";
			document.getElementById("sbz1").style.display="block";
			document.getElementById("scp2").style.display="block";
			document.getElementById("sbz2").style.display="none";
			}
		}
		function scp2()
	{
		document.getElementById("scp2").onclick=function()
		{
			document.getElementById("scp1").style.display="block";
			document.getElementById("sbz1").style.display="none";
			document.getElementById("scp2").style.display="none";
			document.getElementById("sbz2").style.display="block";
			}
		}
var time2;
var K=0;
function GunDong()
{
	var a=document.getElementById("gundongDK");
	if(K==0)
	{
		a.scrollTop+=1;
		if(a.scrollTop>=76)
		{
			K=1;
			a.scrollTop+=1;
		}
	}
	else if(K==1)
	{
		a.scrollTop-=1;
		if(a.scrollTop<=0)
		{
			K=0;
		}
	}
	if(a.scrollTop%76==0)
	{
		clearInterval(Time);
		time2=setTimeout(Ti,8000);
	}
	
}
var Time;
function Ti()
{
	clearInterval(Time);
	Time=setInterval("GunDong()",5);
}
Ti();
function b()
{
	clearTimeout(time2);
	clearInterval(Time);
}
function c()
{
	
	Ti();
}
function c1()
{
	document.getElementById("czg1").onmouseover=function()
	{
		document.getElementById("czg1").style.display="none";
		document.getElementById("czg2").style.display="block";
		document.getElementById("hxfw1").style.display="none";
		document.getElementById("hxfw2").style.display="block";
		document.getElementById("dxyou_top1").style.display="none";
		document.getElementById("dxyou_top2").style.display="block";
		
	}
}
function h2()
{
	document.getElementById("hxfw2").onmouseover=function()
	{
		document.getElementById("czg1").style.display="block";
		document.getElementById("czg2").style.display="none";
		document.getElementById("hxfw1").style.display="block";
		document.getElementById("hxfw2").style.display="none";
		document.getElementById("dxyou_top2").style.display="none";
		document.getElementById("dxyou_top1").style.display="block";
	}
}
function z1()
{
	document.getElementById("dxyou_top1K_zuo").onclick=function()
	{
		document.getElementById("dxyou_top1K_zuo").style.display="none";
		document.getElementById("dxyou_top1K_you").style.display="block";
	}
}
function z2()
{
	document.getElementById("dxyou_top1K_you").onclick=function()
	{
		document.getElementById("dxyou_top1K_zuo").style.display="block";
		document.getElementById("dxyou_top1K_you").style.display="none";
	}
}
function ll1()
{
	document.getElementById("ll1").onclick=function()
	{
		document.getElementById("sj1").style.display="none";
		document.getElementById("sj2").style.display="block";
		document.getElementById("ll2").style.display="block";
		document.getElementById("ll1").style.display="none";
		document.getElementById("kd2").style.display="none";
		document.getElementById("kd1").style.display="block";
		document.getElementById("gh1").style.display="block";
		document.getElementById("gh2").style.display="none";
		document.getElementById("HM").style.display="block";
		document.getElementById("HM2").style.display="none";
		
		
	}
}
function sj2()
{
	document.getElementById("sj2").onclick=function()
	{
		document.getElementById("sj1").style.display="block";
		document.getElementById("sj2").style.display="none";
		document.getElementById("ll2").style.display="none";
		document.getElementById("ll1").style.display="block";
		document.getElementById("kd2").style.display="none";
		document.getElementById("kd1").style.display="block";
		document.getElementById("gh1").style.display="block";
		document.getElementById("gh2").style.display="none";
		document.getElementById("HM").style.display="block";
		document.getElementById("HM2").style.display="none";
		
		
	}
}
function kd1()
{
	document.getElementById("kd1").onclick=function()
	{
		document.getElementById("sj1").style.display="none";
		document.getElementById("sj2").style.display="block";
		document.getElementById("ll2").style.display="none";
		document.getElementById("ll1").style.display="block";
		document.getElementById("kd2").style.display="block";
		document.getElementById("kd1").style.display="none";
		document.getElementById("gh1").style.display="block";
		document.getElementById("gh2").style.display="none";
		document.getElementById("HM").style.display="block";
		document.getElementById("HM2").style.display="none";
		
		
	}
}
function gh1()
{
	document.getElementById("gh1").onclick=function()
	{
		document.getElementById("sj1").style.display="none";
		document.getElementById("sj2").style.display="block";
		document.getElementById("ll2").style.display="none";
		document.getElementById("ll1").style.display="block";
		document.getElementById("kd2").style.display="none";
		document.getElementById("kd1").style.display="block";
		document.getElementById("gh1").style.display="none";
		document.getElementById("gh2").style.display="block";
		document.getElementById("HM2").style.display="block";
		document.getElementById("HM").style.display="none";
		
		
	}
}

/*function yhkcz()
{
	document.getElementById("yhkcz").onclick=function()
	{
		document.getElementById("yhkcz").style.color="#FF8201";
		document.getElementById("kmcz").style.color="#777777";
	}
}
function kmcz()
{
	document.getElementById("kmcz").onclick=function()
	{
		document.getElementById("kmcz").style.color="#FF8201";
		document.getElementById("yhkcz").style.color="#777777";
	}
}*/
function oneH()
{
	document.getElementById("oneH").onclick=function()
	{
		document.getElementById("Money").value="100元";
	}
}
function ten()
{
	document.getElementById("ten").onclick=function()
	{
		document.getElementById("Money").value="10元";
	}
}
function twoH()
{
	document.getElementById("twoH").onclick=function()
	{
		document.getElementById("Money").value="200元";
	}
}
function twenty()
{
	document.getElementById("twenty").onclick=function()
	{
		document.getElementById("Money").value="20元";
	}
}
function threeH()
{
	document.getElementById("threeH").onclick=function()
	{
		document.getElementById("Money").value="300元";
	}
}
function thirty()
{
	document.getElementById("thirty").onclick=function()
	{
		document.getElementById("Money").value="30元";
	}
}
function fiveH()
{
	document.getElementById("fiveH").onclick=function()
	{
		document.getElementById("Money").value="500元";
	}
}
function fifty()
{
	document.getElementById("fifty").onclick=function()
	{
		document.getElementById("Money").value="50元";
	}
}