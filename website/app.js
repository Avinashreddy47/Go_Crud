var app = angular.module('companyApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController',
    })
    .when('/solutions', {
      templateUrl: 'solutions.html',
      controller: 'SolutionsController',
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
    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactController',
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'AboutController',
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

app.controller('SolutionsController', function ($scope) {
  // Solutions page data is handled through static HTML
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
      title: 'Innovation Through Technology',
      description:
        'We drive innovation by leveraging cutting-edge technologies to create solutions that transform businesses and industries.',
    },
    {
      title: 'Enterprise Excellence',
      description:
        'Our commitment to excellence ensures that every solution we deliver meets the highest standards of quality and reliability.',
    },
    {
      title: 'Global Impact',
      description:
        'We aim to make a lasting impact on businesses worldwide through our innovative technology solutions and services.',
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
        'Expand our services globally, establishing partnerships in key markets to deliver innovative solutions worldwide.',
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

app.controller('ContactController', function ($scope) {
  $scope.submitForm = function () {
    // Form submission logic would go here
    // For now, just log the form data
    console.log('Form submitted');
  };
});

app.controller('AboutController', function ($scope) {
  $scope.team = [
    {
      name: 'Sarah Chen',
      position: 'Chief Executive Officer',
      bio: 'With over 20 years of experience in technology leadership, Sarah drives our vision for innovation and growth.',
    },
    {
      name: 'Michael Rodriguez',
      position: 'Chief Technology Officer',
      bio: 'A pioneer in AI and cloud computing, Michael leads our technical strategy and innovation initiatives.',
    },
    {
      name: 'Dr. Emily Thompson',
      position: 'Head of AI Research',
      bio: 'Leading our AI research team, Emily focuses on developing cutting-edge machine learning solutions.',
    },
  ];
});

// Add animations
app.animation('.fade-in', function () {
  return {
    enter: function (element, done) {
      element.css('opacity', 0);
      jQuery(element).animate(
        {
          opacity: 1,
        },
        1000,
        done,
      );
    },
  };
});
