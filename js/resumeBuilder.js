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
                'location': 'Calea Victoriei 155, Bucuresti',
                'dates': 'in progress',
                'description': ''
            }],
            display: function () {

            }
        };
    }
};

var octopus = {
    'init': function () {
        model.init();
        view.init();
    }
};

var view = {
    'init': function () {
        this.headerName = this.getJQueryObj(HTMLheaderName);
        this.headerRole = this.getJQueryObj(HTMLheaderRole);
        
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.mobile = this.getJQueryObj(HTMLmobile);
        this.email = this.getJQueryObj(HTMLemail);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric =
         this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
        this.contactGeneric = this.getJQueryObj(HTMLcontactGeneric);
    },
    'getJQueryObj': function (html) {
        return $(html);
    },
    'setJQueryObjText': function (obj, text, isImbricated) {
        if(isImbricated) {
            text.replace(/%data%/, text);
        } 

        obj.text(text);
    }
};

octopus.init();