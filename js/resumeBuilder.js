/*
This is empty on purpose! Your code to build the resume will go here.
 */

var model = {
    'init': function () {
        this.bio = {
            'name': 'Andrei Luculescu',
            'role': 'Web Developer',
            'contacts': {
                'mobile': '0755257930',
                'email': 'luculescu_andrei@yahoo.com',
                'github': 'andreas192',
                'twitter': null,
                'location': 'Bucharest'
            },
            'welcomeMessage': 'Looking for a high quality Web Developer. You found one. During 3 years of programming I have achieved various skills. Take a look and see if it fits your needs',
            'skills': [
                'PHP',
                'Javascript',
                'CSS',
                'HTML',
                'git, svn',
                'jira',
                'linux',
                'npm, composer',
                'node.js'
            ],
            'biopic': 'https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/10366115_727793853954972_288540818433977394_n.jpg?oh=03230cb250b851bcc66af8cebbd5c586&oe=59B08CB6',
            'display': function () {

            }
        };

        this.education = {
            'schools': [{
                'name': 'Facultatea de Automatica si Calculatoare, UPB',
                'location': 'Bucharest',
                'degree': 'Bachelor\'s Degree',
                'majors': 'Automatic Control and System Engineering',
                'dates': '2011-2015',
                'url': 'http://acs.pub.ro/'
            }, {
                'name': 'CN Stefan Cel Mare',
                'location': 'Suceava',
                'degree': 'baccalaureate',
                'majors': 'Maths Informatics in Romanian and English',
                'dates': '2007-2011',
                'url': 'http://cnstefancelmare.ro/'
            }
            ],
            'onlineCourses': [],
            'display': function () {
            }
        };
        this.work = {
            'jobs': [{
                'employer': 'Complecs Software',
                'title': 'Web Developer',
                'location': 'Bulevardul Carol 1, Bucuresti',
                'dates': 'may 2014 - september 2015',
                'description': ''
            }, {
                'employer': 'Clarisoft Technologies',
                'title': 'Web Developer',
                'location': 'Piata Victoriei, Bucuresti',
                'dates': 'october 2015 - april 2017',
                'description': ''
            }, {
                'employer': 'DPD UK',
                'title': 'Web Developer',
                'location': 'Calea Victoriei 145, Bucuresti',
                'dates': 'in progress',
                'description': ''
            }],
            display: function () {

            }
        };
        this.projects = [];
    }
};

var octopus = {
    'init': function () {
        model.init();
        view.init();
    },
    'getBio': function () {
        return model.bio;
    },
    'getProjects': function () {
        return model.projects;
    },
    'getEducation': function () {
        return model.education;
    },
    'getWork': function () {
        return model.work;
    },
    'getModelKeys': function (obj) {
        return Object.keys(obj);
    }
};

var view = {
    'init': function () {
        this.headerName = this.getJQueryObj(HTMLheaderName);
        this.headerRole = this.getJQueryObj(HTMLheaderRole);

        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.mobile = this.getJQueryObj(HTMLmobile);
        this.email = this.getJQueryObj(HTMLemail);
        this.twitter = this.getJQueryObj(HTMLtwitter);
        this.github = this.getJQueryObj(HTMLgithub);
        this.blog = this.getJQueryObj(HTMLblog);
        this.location = this.getJQueryObj(HTMLlocation);


        this.welcomeMsg = this.getJQueryObj(HTMLwelcomeMsg);

        this.skillsStart = this.getJQueryObj(HTMLskillsStart);
        this.skills = this.getJQueryObj(HTMLskills);

        this.workStart = this.getJQueryObj(HTMLworkStart);
        this.workDates = this.getJQueryObj(HTMLworkDates);
        this.workLocation = this.getJQueryObj(HTMLworkLocation);
        this.workDescription = this.getJQueryObj(HTMLworkDescription);

        this.projectStart = this.getJQueryObj(HTMLprojectStart);
        this.projectTitle = this.getJQueryObj(HTMLprojectTitle);
        this.projectDates = this.getJQueryObj(HTMLprojectDates);
        this.projectDescription = this.getJQueryObj(HTMLprojectDescription);


        this.schoolStart = this.getJQueryObj(HTMLschoolStart);
        this.schoolDates = this.getJQueryObj(HTMLschoolDates);
        this.schoolLocation = this.getJQueryObj(HTMLschoolLocation);
        this.schoolMajor = this.getJQueryObj(HTMLschoolMajor);
        this.schoolDescription = this.getJQueryObj(HTMLprojectDescription);

        this.onlineClasses = this.getJQueryObj(HTMLonlineClasses);
        // this.onlineTitle = this.getJQueryObj(HTMLonlineTitle);
        // this.onlineSchool = this.getJQueryObj(HTMLonlineSchool);
        this.onlineDates = this.getJQueryObj(HTMLonlineDates);
        this.onlineURL = this.getJQueryObj(HTMLonlineURL);

        this.internationalizeButton = this.getJQueryObj(internationalizeButton);
        this.googleMap = this.getJQueryObj(googleMap);

        this.viewKeys = Object.keys(this);
        $("#education, #workExperience, #mapDiv").click(function () {
            $(this).children(':not(h2)').toggleClass('hide');
        })

        this.render();
    },
    'render': function () {
        var bio = octopus.getBio();

        this.setJQueryObjText(this.headerName, bio.name);
        this.setJQueryObjText(this.headerRole, bio.role);

        this.headerName.insertBefore('#topContacts');
        this.headerRole.insertBefore('#topContacts');
        $('<hr>').insertBefore('#topContacts');

        var contactsKey = octopus.getModelKeys(bio.contacts);

        contactsKey.forEach(function (key) {
            view.setJQueryObjText(view[key], bio.contacts[key], true);
        });

        $('#topContacts, #footerContacts').append([this.mobile, this.email, this.github, this.location])

        this.bioPic = this.getJQueryImage(HTMLbioPic, bio.biopic);
        $('#header').append(this.bioPic);

        this.setJQueryObjText(this.welcomeMsg, bio.welcomeMessage);
        $('#header').append(this.welcomeMsg);

        $('#header').append(this.skillsStart);

        bio.skills.forEach(function (skill) {
            var JQuerySkillObj = view.skills.clone();
            view.setJQueryObjText(JQuerySkillObj, skill);
            $('#skills').append(JQuerySkillObj);
        })

        var work = octopus.getWork();

        work.jobs.reverse().forEach(function (workPlace) {
            view.workEmployer = HTMLworkEmployer.replace(/\%data\%/, workPlace.employer);
            view.workTitle = HTMLworkTitle.replace(/\%data\%/, workPlace.employer);

            var workDates = view.workDates.clone();
            view.setJQueryObjText(workDates, workPlace.dates, );

            var workLocation = view.workLocation.clone();
            view.setJQueryObjText(workLocation, workPlace.location);

            var workDescription = view.workDescription.clone();
            view.setJQueryObjText(workDescription, workPlace.description);

            var workStart = view.workStart.clone();
            workStart.append(view.getJQueryObj(view.workEmployer + view.workTitle));
            workStart.append(workDates);
            workStart.append(workLocation);
            workStart.append(workDescription);

            $("#workExperience").append(workStart);
        });

        var projects = octopus.getProjects();

        projects.forEach(function (project) {
            var projectTitle = view.projectTitle.clone();
            view.setJQueryObjText(projectTitle, project.title);

            var projectDates = view.projectTitle.clone();
            view.setJQueryObjText(projectDates, project.dates);

            var projectDescription = view.projectTitle.clone();
            view.setJQueryObjText(projectDescription, project.description);

            var projectStart = view.projectStart.clone();
            projectStart.append(projectTitle);
            projectStart.append(projectDates);
            projectStart.append(projectDescription);
        });

        var education = octopus.getEducation();

        education.schools.forEach(function (school) {
            school.name = HTMLschoolName.replace(/\%data\%/, school.name);
            school.degree = HTMLschoolDegree.replace(/\%data\%/, school.degree);

            var schoolDates = view.schoolDates.clone();
            view.setJQueryObjText(schoolDates, school.dates);

            var schoolLocation = view.schoolLocation.clone();
            view.setJQueryObjText(schoolLocation, school.location);

            var schoolDescription = view.schoolDescription.clone();
            view.setJQueryObjText(schoolDescription, school.description);

            var schoolMajor = view.schoolMajor.clone();
            view.setJQueryObjText(schoolMajor, school.major);

            var schoolStart = view.schoolStart.clone();
            schoolStart.append(view.getJQueryObj(school.name + school.degree));
            schoolStart.append(schoolDates);
            schoolStart.append(schoolLocation);
            schoolStart.append(schoolDescription);
            schoolStart.append(schoolMajor);

            $("#education").append(schoolStart);
        })

        $('#mapDiv').append(this.googleMap);
        var map;
        this.initializeMap();
    },
    'getJQueryObj': function (html, isImg) {
        return $(html);
    },

    'setJQueryObjText': function (obj, text, isImbricated) {
        if (isImbricated) {
            obj.find('.white-text').text(text);
        } else {
            if (!text) {
                obj.html('<br>');
                return;
            }

            obj.text(text);
        }
    },
    'getJQueryImage': function (HTMLimageStr, src) {
        HTMLimageStr = HTMLimageStr.replace(/\%data\%/, src);
        return this.getJQueryObj(HTMLimageStr);
    },
    initializeMap: function () {
        var locations;
        var bio = octopus.getBio();
        var education = octopus.getEducation();
        var work = octopus.getWork();

        var mapOptions = {
            disableDefaultUI: true
        };

        /*
        For the map to be displayed, the googleMap var must be
        appended to #mapDiv in resumeBuilder.js.
        */
        map = new google.maps.Map(document.querySelector('#map'), mapOptions);


        /*
        locationFinder() returns an array of every location string from the JSONs
        written for bio, education, and work.
        */
        function locationFinder() {

            // initializes an empty array
            var locations = [];

            // adds the single location property from bio to the locations array
            locations.push(bio.contacts.location);

            // iterates through school locations and appends each location to
            // the locations array. Note that forEach is used for array iteration
            // as described in the Udacity FEND Style Guide:
            // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
            education.schools.forEach(function (school) {
                locations.push(school.location);
            });

            // iterates through work locations and appends each location to
            // the locations array. Note that forEach is used for array iteration
            // as described in the Udacity FEND Style Guide:
            // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
            work.jobs.forEach(function (job) {
                locations.push(job.location);
            });

            return locations;
        }

        /*
        createMapMarker(placeData) reads Google Places search results to create map pins.
        placeData is the object returned from search results containing information
        about a single location.
        */
        function createMapMarker(placeData) {

            // The next lines save location data from the search result object to local variables
            var lat = placeData.geometry.location.lat();  // latitude from the place service
            var lon = placeData.geometry.location.lng();  // longitude from the place service
            var name = placeData.formatted_address;   // name of the place from the place service
            var bounds = window.mapBounds;            // current boundaries of the map window

            // marker is an object with additional data about the pin for a single location
            var marker = new google.maps.Marker({
                map: map,
                position: placeData.geometry.location,
                title: name
            });

            // infoWindows are the little helper windows that open when you click
            // or hover over a pin on a map. They usually contain more information
            // about a location.
            var infoWindow = new google.maps.InfoWindow({
                content: name
            });

            // hmmmm, I wonder what this is about...
            google.maps.event.addListener(marker, 'click', function () {
                // your code goes here!
            });

            // this is where the pin actually gets added to the map.
            // bounds.extend() takes in a map location object
            bounds.extend(new google.maps.LatLng(lat, lon));
            // fit the map to the new marker
            map.fitBounds(bounds);
            // center the map
            map.setCenter(bounds.getCenter());
        }

        /*
        callback(results, status) makes sure the search returned results for a location.
        If so, it creates a new map marker for that location.
        */
        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                createMapMarker(results[0]);
            }
        }

        /*
        pinPoster(locations) takes in the array of locations created by locationFinder()
        and fires off Google place searches for each location
        */
        function pinPoster(locations) {

            // creates a Google place search service object. PlacesService does the work of
            // actually searching for location data.
            var service = new google.maps.places.PlacesService(map);

            // Iterates through the array of locations, creates a search object for each location
            locations.forEach(function (place) {
                // the search request object
                var request = {
                    query: place
                };

                // Actually searches the Google Maps API for location data and runs the callback
                // function with the search results after each search.
                service.textSearch(request, callback);
            });
        }

        // Sets the boundaries of the map based on pin locations
        window.mapBounds = new google.maps.LatLngBounds();

        // locations is an array of location strings returned from locationFinder()
        locations = locationFinder();

        // pinPoster(locations) creates pins on the map for each location in
        // the locations array
        pinPoster(locations);

        window.addEventListener('resize', function (e) {
            //Make sure the map bounds get updated on page resize
            map.fitBounds(mapBounds);
        });


    }
};

octopus.init();

