// nav menu components

const Home = Vue.extend({
   template: ["<p class='active'>This is home page.</p>",
   "<div class='jumbotron'><p>Image carousel goes here</p></div>",
   "<h5>Welcome to Lubaan</h5>"].join('\n')
});
const About = Vue.extend({
   template: "<p>This is about page.</p>" 
});
const Packages = Vue.extend({
   template: "<p>This is packages page.</p>" 
});
const Booking = Vue.extend({
   template: "<p>This is booking page.</p>" 
});
const Contact = Vue.extend({
   template: "<p>This is contact page.</p>" 
});

const App = Vue.extend({});
const router = new VueRouter();

router.map({
   '/home':{
       component: Home
   },
   '/about':{
       component: About
   },
    
   '/packages':{
       component: Packages
   },
    
   '/booking':{
       component: Booking
   },
    
    '/contact':{
       component: Contact
   }  
})
router.start(App,"#app");