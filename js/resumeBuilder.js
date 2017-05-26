/*
This is empty on purpose! Your code to build the resume will go here.
 */
$(function(){
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
                    'location': 'Calea Victoriei 155, Bucuresti',
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
        'getBio': function() {
            return model.bio;
        },
        'getProjects': function() {
            return model.projects;
        },
        'getEducation': function() {
            return model.education;
        },
        'getWork': function() {
            return model.work;
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
            // this.workEmployer = this.getJQueryObj(HTMLworkEmployer);
            // this.workTitle = this.getJQueryObj(HTMLworkTitle);
            this.workDates = this.getJQueryObj(HTMLworkDates);
            this.workLocation = this.getJQueryObj(HTMLworkLocation);
            this.workDescription = this.getJQueryObj(HTMLworkDescription);

            this.projectStart = this.getJQueryObj(HTMLprojectStart);
            this.projectTitle = this.getJQueryObj(HTMLprojectTitle);
            this.projectDates = this.getJQueryObj(HTMLprojectDates);
            this.projectDescription = this.getJQueryObj(HTMLprojectDescription);


            this.schoolStart = this.getJQueryObj(HTMLschoolStart);
            // this.schoolName = this.getJQueryObj(HTMLschoolName);
            // this.schoolDegree = this.getJQueryObj(HTMLschoolDegree);
            this.schoolDates = this.getJQueryObj(HTMLschoolDates);
            this.schoolLocation = this.getJQueryObj(HTMLschoolLocation);
            this.schoolMajor = this.getJQueryObj(HTMLschoolMajor);

            this.onlineClasses = this.getJQueryObj(HTMLonlineClasses);
            // this.onlineTitle = this.getJQueryObj(HTMLonlineTitle);
            // this.onlineSchool = this.getJQueryObj(HTMLonlineSchool);
            this.onlineDates = this.getJQueryObj(HTMLonlineDates);
            this.onlineURL = this.getJQueryObj(HTMLonlineURL);

            this.internationalizeButton = this.getJQueryObj(internationalizeButton);
            this.googleMap = this.getJQueryObj(googleMap);

            this.render();
        },
        'render': function() {
            var bio = octopus.getBio();

            this.setJQueryObjText(this.headerName, bio.name);
            this.setJQueryObjText(this.headerRole, bio.role);

            this.headerName.insertBefore('#topContacts');
            this.headerRole.insertBefore('#topContacts');
            $('<hr>').insertBefore('#topContacts');

            this.setJQueryObjText(this.mobile, bio.contacts.mobile, true);
            this.setJQueryObjText(this.email, bio.contacts.email, true);
            this.setJQueryObjText(this.github, bio.contacts.github, true);
            this.setJQueryObjText(this.location, bio.contacts.location, true);

            $('#topContacts').append([this.mobile, this.email, this.github, this.location])

            this.bioPic = this.getJQueryImage(HTMLbioPic, bio.biopic);
            this.bioPic.load(function () {
                $('#header').append(this);
            });

            // this.welcomeMsg = this.setJQueryObjText(obj, text, isImbricated);

            // this.skillsStart = this.getJQueryObj(HTMLskillsStart);
            // this.skills = this.getJQueryObj(HTMLskills);
            //
            // this.workStart = this.getJQueryObj(HTMLworkStart);
            // this.workEmployer = this.getJQueryObj(HTMLworkEmployer);
            // this.workTitle = this.getJQueryObj(HTMLworkTitle);
            // this.workDates = this.getJQueryObj(HTMLworkDates);
            // this.workLocation = this.getJQueryObj(HTMLworkLocation);
            // this.workDescription = this.getJQueryObj(HTMLworkDescription);
            //
            // this.projectStart = this.getJQueryObj(HTMLprojectStart);
            // this.projectTitle = this.getJQueryObj(HTMLprojectTitle);
            // this.projectDates = this.getJQueryObj(HTMLprojectDates);
            // this.projectDescription = this.getJQueryObj(HTMLprojectDescription);
            // this.projectImage = this.getJQueryObj(HTMLprojectImage);
            // this.projectImage = this.getJQueryObj(HTMLprojectImage);
            //
            // this.schoolStart = this.getJQueryObj(HTMLschoolStart);
            // this.schoolName = this.getJQueryObj(HTMLschoolName);
            // this.schoolDegree = this.getJQueryObj(HTMLschoolDegree);
            // this.schoolDates = this.getJQueryObj(HTMLschoolDates);
            // this.schoolLocation = this.getJQueryObj(HTMLschoolLocation);
            // this.schoolMajor = this.getJQueryObj(HTMLschoolMajor);
            //
            // this.onlineClasses = this.getJQueryObj(HTMLonlineClasses);
            // this.onlineTitle = this.getJQueryObj(HTMLonlineTitle);
            // this.onlineSchool = this.getJQueryObj(HTMLonlineSchool);
            // this.onlineDates = this.getJQueryObj(HTMLonlineDates);
            // this.onlineURL = this.getJQueryObj(HTMLonlineURL);
            //
            // this.internationalizeButton = this.getJQueryObj(internationalizeButton);
            // this.googleMap = this.getJQueryObj(googleMap);
        },
        'getJQueryObj': function (html, isImg) {
            return $(html);
        },

        'setJQueryObjText': function (obj, text, isImbricated) {
            if(isImbricated) {
                obj.find('.white-text').html(text);
            } else {
                obj.text(text);
            }
        },
        'getJQueryImage': function(HTMLimageStr, src) {
            HTMLimageStr = HTMLimageStr.replace(/\%data\%/, src);
            return this.getJQueryObj(HTMLimageStr);
        }
    };

    octopus.init();

})
