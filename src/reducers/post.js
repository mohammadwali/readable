const initialState = {
    "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Upcoming O\'Reilly Velocity Conferences',
        body: 'Velocity Conference is one of those conferences that every type of software industry specialist should go to, and I say that as a front-end developer.  Velocity covers a host of important topics:  security, performance and scaling, devops, leadership, and more.  While I love nothing more than burying my head into a text editor, a recognize that security, performance, and essential team skills like leadership are important for career growth. Velocity Conference is hitting two amazing cities this October:   (October 1-4) and  (October 17-20).  You\'ll hear from diverse speakers from prominent organizations like Google, Netflix, Dropbox, Pinterest, Microsoft, Fastly, Intel, and more! ',
        author: 'thingtwo',
        category: 'technology',
        voteScore: 6,
        deleted: false
    },
    "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: '5 More HTML5 APIs You Didn’t Know Existed',
        body: 'The HTML5 revolution has provided us some awesome JavaScript and HTML APIs.  Some are APIs we knew we\'ve needed for years, others are cutting edge mobile and desktop helpers.  Regardless of API strength or purpose, anything to help us better do our job is a step in the right direction.  I recently shared with you 5 HTML5 APIs You Didn\'t Know Existed in the hope that some of them would inspire you to improve your own web apps.  I\'d like to share with you 5 more lessor known HTML5 APIs -- hopefully you find some of them useful! Look forward to using this API quite a bit in the future -- interactivity within the browser will be the norm a year from now!',
        author: 'thingone',
        category: 'html5',
        voteScore: -5,
        deleted: false
    },
    "6ni6ok3ym9mf1p33lnez": {
        id: '6ni6ok3ym9mf1p33lnez',
        timestamp: 1469323967000,
        title: 'JavaScript Deep Merge',
        body: 'I recently shared how you can merge object properties with the spread operator but this method has one big limitation:  the spread operator merge isn\'t a "deep" merge, meaning merges are recursive.  Moreover nested object properties aren\'t merged -- the last value specified in the merge replaces the last, even when there are other properties that should exist. In the sample above, you\'ll notice that the hair object\'s color is gone instead of merged because the spread operator simply keeps the last provided values, which in this case is me.hair.  The same merge problem applies to arrays -- you\'ll notice mom and dad aren\'t merged from the defaultPerson object\'s family array.  Yikes! Deep merging in JavaScript is important, especially with the common practice of "default" or "options" objects with many properties and nested objects that often get merged with instance-specific values.  If you\'re looking for a utility to help with deep merges, look no further than the tiny deepmerge utility!',
        author: 'thingone',
        category: 'nodejs',
        voteScore: -5,
        deleted: false
    }
};


function postReducer(state = initialState, action) {
    switch (action) {
        default:
            return state;
    }
}


export default postReducer;