var app = angular.module('companyApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController',
    })
    .when('/projects', {
      templateUrl: 'projects.html',
      controller: 'ProjectsController',
    })
    .when('/missions', {
      templateUrl: 'missions.html',
      controller: 'MissionsController',
    })
    .when('/goals', {
      templateUrl: 'goals.html',
      controller: 'GoalsController',
    })
    .otherwise({
      redirectTo: '/',
    });
});

app.controller('HomeController', function ($scope) {
  $scope.message = 'Welcome to InfoTech Synergy - Transforming Businesses Through Technology';
  $scope.description =
    'InfoTech Synergy is a leading provider of enterprise-grade technology solutions. We specialize in digital transformation, cloud computing, and AI-driven innovation to help businesses thrive in the digital age.';
});

app.controller('ProjectsController', function ($scope) {
  $scope.projects = [
    {
      title: 'Enterprise Cloud Migration',
      description:
        'Successfully migrated Fortune 500 company infrastructure to cloud, resulting in 40% cost reduction and improved scalability.',
    },
    {
      title: 'AI-Powered Customer Analytics',
      description:
        'Implemented advanced analytics platform for retail chain, increasing customer retention by 25% and sales by 30%.',
    },
    {
      title: 'Digital Banking Transformation',
      description:
        'Modernized banking infrastructure for regional bank, enabling digital services and reducing transaction time by 60%.',
    },
    {
      title: 'Supply Chain Optimization',
      description:
        'Developed ML-based supply chain optimization system, reducing inventory costs by 35% and improving delivery times.',
    },
  ];
});

app.controller('MissionsController', function ($scope) {
  $scope.missions = [
    {
      title: 'Digital Excellence',
      description:
        'Delivering cutting-edge digital solutions that drive business growth and operational efficiency.',
    },
    {
      title: 'Innovation Leadership',
      description:
        'Pioneering advanced technology solutions in AI, cloud computing, and digital transformation.',
    },
    {
      title: 'Client Success',
      description:
        'Ensuring measurable business outcomes through strategic technology implementation and support.',
    },
    {
      title: 'Industry Expertise',
      description:
        'Providing specialized solutions for banking, healthcare, retail, and manufacturing sectors.',
    },
  ];
});

app.controller('GoalsController', function ($scope) {
  $scope.goals = [
    {
      title: 'Technology Leadership',
      description:
        'To be the leading provider of enterprise technology solutions, recognized for innovation and excellence.',
    },
    {
      title: 'Digital Transformation',
      description:
        'Enable businesses to achieve digital maturity through comprehensive technology solutions and strategies.',
    },
    {
      title: 'Industry Solutions',
      description:
        'Develop specialized solutions for key industries, addressing unique challenges and opportunities.',
    },
    {
      title: 'Global Impact',
      description:
        'Expand our global presence while maintaining excellence in service delivery and client satisfaction.',
    },
  ];
});

app.controller('TeamController', function ($scope) {
  $scope.leadership = [
    {
      name: 'John Anderson',
      role: 'Chief Executive Officer',
      description: 'Former VP of Technology at Fortune 500, 20+ years in enterprise solutions.',
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      description: 'PhD in Computer Science, led major digital transformation projects.',
    },
    {
      name: 'Michael Roberts',
      role: 'Head of AI Solutions',
      description: 'Expert in machine learning and AI implementation for enterprise.',
    },
    {
      name: 'Lisa Kumar',
      role: 'Director of Client Success',
      description: 'Specialized in enterprise client relationships and solution delivery.',
    },
  ];
});
