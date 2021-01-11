//<![CDATA[
var multiFeed = {
    feedsUri: [
        {
            name: "JUDUL Happy",
            url: "https://free-thm.blogspot.com",
            tag: "Happy"
        },
        {
            name: "JUDUL LABEL",
            url: "https://free-thm.blogspot.com",
            tag: "H"
        },
        {
            name: "JUDUL LABEL",
            url: "https://free-thm.blogspot.com",
            tag: "A"
        },
{
            name: "JUDUL Happy",
            url: "https://free-thm.blogspot.com",
            tag: "Happy"
        },
        {
            name: "JUDUL LABEL",
            url: "https://free-thm.blogspot.com",
            tag: "H"
        },
        {
            name: "JUDUL LABEL",
            url: "https://free-thm.blogspot.com",
            tag: "A"
        },
{
            name: "JUDUL Happy",
            url: "https://free-thm.blogspot.com",
            tag: "Happy"
        },
        {
            name: "JUDUL LABEL",
            url: "https://free-thm.blogspot.com",
            tag: "H"
        },
        {
            name: "JUDUL LABEL",
            url: "https://free-thm.blogspot.com",
            tag: "A"
        },
{
            name: "JUDUL Happy",
            url: "https://free-thm.blogspot.com",
            tag: "Happy"
        },
        {
            name: "JUDUL LABEL",
            url: "https://free-thm.blogspot.com",
            tag: "H"
        },
        {
            name: "JUDUL LABEL",
            url: "https://free-thm.blogspot.com",
            tag: "A"
        }
],
    numPost: 4,
    showThumbnail:true,
    showSummary:true,
    summaryLength: 80,
    titleLength: "auto",
    thumbSize: 72,
    containerId: "feed-list-container",
    readMore: {
        text: "Selengkapnya",
        endParam: ""
    }
};
var mf_defaults={feedsUri:[{name:"",url:"",tag:""}],numPost:4,showThumbnail:true,showSummary:true,summaryLength:80,titleLength:"auto",thumbSize:72,newTabLink:false,containerId:"feed-list-container",listClass:"list-entries",readMore:{text:"More",endParam:""},autoHeight:false,current:0,onLoadFeed:function(a){},onLoadComplete:function(){},loadFeed:function(c){var d=document.getElementsByTagName("head")[0],a=document.getElementById(this.containerId),b=document.createElement("script");b.type="text/javascript";b.src=this.feedsUri[c].url+"/feeds/posts/summary"+(this.feedsUri[c].tag?"/-/"+this.feedsUri[c].tag:"")+"?alt=json-in-script&max-results="+this.numPost+"&callback=listEntries";d.appendChild(b)}};for(var i in mf_defaults){mf_defaults[i]=(typeof(multiFeed[i])!==undefined&&typeof(multiFeed[i])!=="undefined")?multiFeed[i]:mf_defaults[i]}function listEntries(q){var p=q.feed.entry,c=mf_defaults,h=document.getElementById(c.containerId),a=document.createElement("div"),d="<ul>",l=c.feedsUri.length,n,k,m,g;for(var f=0;f<c.numPost;f++){if(f==p.length){break}n=(c.titleLength!=="auto")?p[f].title.$t.substring(0,c.titleLength)+(c.titleLength<p[f].title.$t.length?"&hellip;":""):p[f].title.$t;m=("summary" in p[f])?p[f].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,""):"";m=(c.summaryLength<m.length)?m.substring(0,c.summaryLength)+"&hellip;":m;g=("media$thumbnail" in p[f])?'<img alt="'+n+'" src="'+p[f].media$thumbnail.url.replace(/\/s72(\-c)?\//,"/s"+c.thumbSize+"-c/")+'"/>':'<img alt="'+n+'" src="https://i.ytimg.com/vi_webp/eB87NqrNlZw/mqdefault.webp"/>';for(var e=0,b=p[f].link.length;e<b;e++){k=(p[f].link[e].rel=="alternate")?p[f].link[e].href:"#"}d+='<li>';d+='<div class="thumbnail"><a title="'+n+'" href="'+k+'">';d+=(c.showThumbnail)?g:"";d+='</a></div>';d+='<div class="title"><a title="'+n+'" href="'+k+'"'+(c.newTabLink?' target="_blank"':"")+">"+n+"</a></div>";d+='<div class="summary">';d+=(c.showSummary)?m:"";d+="</div>";d+='<div class="clear"/></li>'}d+="</ul>";d+='<div class="more-link"><a title="'+c.feedsUri[c.current].tag+'" href="'+c.feedsUri[c.current].url.replace(/\/$/,"")+"/search/label/"+c.feedsUri[c.current].tag+c.readMore.endParam+'"'+(c.newTabLink?' target="_blank"':"")+">"+c.readMore.text+"</a></div>";a.className=c.listClass;a.innerHTML='<div class="label-title">'+c.feedsUri[c.current].name+"</div>"+d;h.appendChild(a);c.onLoadFeed(c.current);if((c.current+1)<l){c.loadFeed(c.current+1)}if((c.current+1)==l){c.onLoadComplete()}c.current++}mf_defaults.loadFeed(0);
//]]>
