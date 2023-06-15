let businessCard = document.getElementById('busCard'),
announcment = document.getElementById('anncment'),
contacts = document.getElementById('contacts'),
news = document.getElementById('news');

function openAnnouncments(){
    announcment.style.opacity = '1';
    announcment.style.position = 'relative';
    announcment.style.visibility = 'visible';
    businessCard.style.opacity = '0';
    businessCard.style.position = 'absolute';
    businessCard.style.visibility = 'hidden';
    businessCard.style.top = '-100%';
    contacts.style.opacity = '0';
    contacts.style.position = 'absolute';
    contacts.style.visibility = 'hidden';
    contacts.style.top = '-100%';
    news.style.opacity = '0';
    news.style.position = 'absolute';
    news.style.visibility = 'hidden';
    news.style.top = '-100%';
}
function openBCard(){
    businessCard.style.opacity = '1';
    businessCard.style.position = 'relative';
    businessCard.style.visibility = 'visible';
    businessCard.style.height = '100%'
    announcment.style.opacity = '0';
    announcment.style.position = 'absolute';
    announcment.style.visibility = 'hidden';
    announcment.style.top = '-100%';
    contacts.style.opacity = '0';
    contacts.style.position = 'absolute';
    contacts.style.visibility = 'hidden';
    contacts.style.top = '-100%';
    news.style.opacity = '0';
    news.style.position = 'absolute';
    news.style.visibility = 'hidden';
    news.style.top = '-100%';
}
function openContacts(){
    contacts.style.opacity = '1';
    contacts.style.position = 'relative';
    contacts.style.visibility = 'visible'; 
    contacts.style.height = '100%'
    announcment.style.opacity = '0';
    announcment.style.position = 'absolute';
    announcment.style.visibility = 'hidden';
    announcment.style.top = '-100%';
    businessCard.style.opacity = '0';
    businessCard.style.position = 'absolute';
    businessCard.style.visibility = 'hidden';
    businessCard.style.top = '-100%';
    news.style.opacity = '0';
    news.style.position = 'absolute';
    news.style.visibility = 'hidden';
    news.style.top = '-100%';
}
function openNews(){
    news.style.opacity = '1';
    news.style.position = 'relative';
    news.style.visibility = 'visible'; 
    news.style.height = '100%'
    announcment.style.opacity = '0';
    announcment.style.position = 'absolute';
    announcment.style.visibility = 'hidden';
    announcment.style.top = '-100%';
    businessCard.style.opacity = '0';
    businessCard.style.position = 'absolute';
    businessCard.style.visibility = 'hidden';
    businessCard.style.top = '-100%';
    contacts.style.opacity = '0';
    contacts.style.position = 'absolute';
    contacts.style.visibility = 'hidden';
    contacts.style.top = '-100%';
}