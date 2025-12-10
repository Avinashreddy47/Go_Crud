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
  $scope.message = 'Welcome to Exprad - Pioneering the Future with AI and Emerging Technologies';
  $scope.description =
    'At Exprad, we are dedicated to outsourcing applications and building innovative solutions that harness the power of emerging technologies. Our focus is on creating cutting-edge AI-driven products that lead the industry.';
});

app.controller('ProjectsController', function ($scope) {
  $scope.projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description:
        'A comprehensive platform that uses machine learning to provide deep insights into business data, enabling data-driven decision-making.',
    },
    {
      title: 'IoT Integration Solutions',
      description:
        'Seamless integration of Internet of Things devices with existing systems, enhancing automation and efficiency in various industries.',
    },
    {
      title: 'Blockchain-Based Secure Transactions',
      description:
        'Developing secure, transparent transaction systems using blockchain technology for financial and supply chain applications.',
    },
  ];
});

app.controller('MissionsController', function ($scope) {
  $scope.missions = [
    {
      title: 'Innovation Through Outsourcing',
      description:
        'We specialize in outsourcing application development, allowing our clients to focus on their core business while we handle the technical complexities.',
    },
    {
      title: 'Building Innovative Solutions',
      description:
        'Our team creates innovative solutions that address real-world problems, leveraging the latest in AI, machine learning, and other emerging technologies.',
    },
    {
      title: 'Leading in AI Solutions',
      description:
        'We are at the forefront of AI innovation, developing solutions that not only meet current needs but also anticipate future challenges.',
    },
  ];
});

app.controller('GoalsController', function ($scope) {
  $scope.goals = [
    {
      title: 'Expand AI Capabilities',
      description:
        'To become a leader in AI solutions by investing in research and development of advanced machine learning models and natural language processing systems.',
    },
    {
      title: 'Global Expansion',
      description:
        'Expand our outsourcing services globally, establishing partnerships in key markets to deliver innovative solutions worldwide.',
    },
    {
      title: 'Sustainable Technology',
      description:
        'Develop technologies that promote sustainability, using AI to optimize resource usage and reduce environmental impact.',
    },
    {
      title: 'Talent Development',
      description:
        'Build a world-class team of experts in emerging technologies, fostering a culture of continuous learning and innovation.',
    },
  ];
});
