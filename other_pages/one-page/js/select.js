let forStudButton = document.getElementById('forStudents'),
forStudWindow = document.getElementById('forStud'),
forParWindow = document.getElementById('forPar'),
forCitWindow = document.getElementById('forCit'),
forAdmProcWindow = document.getElementById('forAdmProc'),

oneWindow = document.getElementById('oneW'),
oneWindowButton = document.getElementById('oneWB');

var OneeWindow = $('#oneW');

function openOneWindow() {
    oneWindow.style.display = 'block';
    oneWindow.style.opacity = '1';

    aboutWindow.style.display = 'none';
    appealsWindow.style.display = 'none';
}

function openStudWind() {
    forStudWindow.style.opacity = '1';
    forStudWindow.style.height = '180vh';
    oneWindow.style.height = '190vh';
    forStudWindow.style.width = '50%';
    forStudWindow.style.display = 'block';

    forParWindow.style.display = 'none';
    forCitWindow.style.display = 'none';
    forAdmProcWindow.style.display = 'none';
}


function openParWind() {
    forParWindow.style.opacity = '1',
    forParWindow.style.height = '125vh';
    forParWindow.style.width = '50%';
    oneWindow.style.height = '135vh';
    forParWindow.style.display = 'block';
    
    forStudWindow.style.display = 'none';
    forCitWindow.style.display = 'none';
    forAdmProcWindow.style.display = 'none';
}

function openCitWind() {
    forCitWindow.style.opacity ='1';
    forCitWindow.style.height = '50vh';
    forCitWindow.style.width = '50%';
    oneWindow.style.height = '60vh';
    forCitWindow.style.display = 'block';

    forParWindow.style.display = 'none';
    forStudWindow.style.display = 'none';
    forAdmProcWindow.style.display = 'none';
}
function openAdmProcWind() {
    forAdmProcWindow.style.opacity = '1';
    forAdmProcWindow.style.height = '50vh';
    forAdmProcWindow.style.width = '47%';
    oneWindow.style.height = '60vh';
    forAdmProcWindow.style.display = 'block';

    forParWindow.style.display = 'none';
    forStudWindow.style.display = 'none';
    forCitWindow.style.display = 'none';
}


let forMngWindow = document.getElementById('management'),
forTchRoomWindow = document.getElementById('tchRoom'),
forElSchWindow = document.getElementById('elementarySch'),
forProjectActWindow = document.getElementById('projectAct'),

aboutWindow = document.getElementById('about');

function openAboutWindow() {
    aboutWindow.style.opacity = '1';
    aboutWindow.style.display = 'block';
    aboutWindow.style.height = '90vh'

    oneWindow.style.display = 'none';
    appealsWindow.style.display = 'none';
}
function openManageWindow() {
    forTchRoomWindow.style.display = 'none';
    forElSchWindow.style.display = 'none';
    forProjectActWindow.style.display = 'none';
}
function openTeachersRoom() {
    forTchRoomWindow.style.width = '50%';
    forTchRoomWindow.style.height = '76vh';
    forTchRoomWindow.style.opacity = '1';
    forTchRoomWindow.style.display = 'block';

    forElSchWindow.style.display = 'none';
    forProjectActWindow.style.display = 'none';
}
function openElemenatrySchoolWindow() {
    forElSchWindow.style.width = '50%';
    forElSchWindow.style.height = '76vh';
    forElSchWindow.style.opacity = '1';
    forElSchWindow.style.display = 'block';

    forTchRoomWindow.style.display = 'none';
    forProjectActWindow.style.display = 'none';
}
function openProjectActWindow(){
    forProjectActWindow.style.width = '50%';
    forProjectActWindow.style.height = '76vh';
    forProjectActWindow.style.opacity = '1';
    forProjectActWindow.style.display = 'block';
    
    forTchRoomWindow.style.display = 'none';
    forElSchWindow.style.display = 'none';
}
function openSixthDayWindow() {
    forTchRoomWindow.style.display = 'none';
    forElSchWindow.style.display = 'none';
    forProjectActWindow.style.display = 'none';
}
function openPhotogaleryWindow() {
    forTchRoomWindow.style.display = 'none';
    forElSchWindow.style.display = 'none';
    forProjectActWindow.style.display = 'none';
    forMngWindow.style.display = 'none';
}

let forSampleStatmWindow = document.getElementById('sampStat'),

appealsWindow = document.getElementById('appeals')

function openAppealsWindow () {
    appealsWindow.style.display = 'block';
    appealsWindow.style.opacity = '1';

    oneWindow.style.display = 'none';
    aboutWindow.style.display = 'none';
}
function openSampStatWindow () {
    forSampleStatmWindow.style.width = '50%';
    forSampleStatmWindow.style.height = '47vh';
    forSampleStatmWindow.style.opacity = '1';
    forSampleStatmWindow.style.display = 'block';
}
function closeSampStatWindow () {
    forSampleStatmWindow.style.display = 'none';
}


function closeSelects () {
    /* one window */
    oneWindow.style.display = 'none';

    forParWindow.style.display = 'none';
    forStudWindow.style.display = 'none';
    forCitWindow.style.display = 'none';
    forAdmProcWindow.style.display = 'none';
    oneWindow.style.height = '60vh';

    /* about school window */
    aboutWindow.style.display = 'none';

    forMngWindow.style.display = 'none';
    forTchRoomWindow.style.display = 'none';
    forElSchWindow.style.display = 'none';
    aboutWindow.style.height = '47vh';

    /* appeals window */
    appealsWindow.style.display = 'none';

    forSampleStatmWindow.style.display = 'none';
}