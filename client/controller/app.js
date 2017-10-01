angular.module('book-store',[])
.component('app',{


controller: function(){
    this.books=[
{
    title: 'Managerial-and-cost accounting',
    auther: 'Christopher J. Skousen , Larry M. Walther',
    descreption: 'Early portions of this textbook dealt mostly with financial accounting. Financial accounting is concerned with reporting to external parties such as owners, analysts, and creditors. These external users rarely have access to the information that is internal to the organization, nor do they specify the exact information that will be presented. Instead, they must rely on the general reports presented by the company. Therefore, the reporting structure is well defined and standardized. The methods of preparation and the reports presented are governed by rules of various standard-setting organizations. Furthermore, the external users generally see only the summarized or aggregated data for an entity.',
    image: '/images/managerial-and-cost-accounting.jpg',
    path: 'managerial-and-cost-accounting.pdf',
    gener: 'Accounting',
    rating: 0
    },
  {
    title: 'How to Become a Coach',
    auther: 'Ton de Graaf',
    descreption: 'Coaching is one of the fastest growing industries in the world. Everyday new coaches enter the market. Schools, institutes and academies o er coach training programs and consultancy  rms quickly add coaching and o er it to their clients as one of their new key services.',
    image: '/images/how-to-become-a-coach.jpg',
    path: 'how-to-become-a-coach.pdf',
    gener: 'Career managment',
    rating: 0
     },
  { 
    title: 'Good Digital Hygiene',
    auther: 'Dr Eduardo Gelbstein',
    descreption: 'With nearly 50 years experience in the private and public sectors in several countries, Ed has been active in information security through publications, international conferences, workshops and also as an auditor.',
    image: '/images/good-digital-hygiene.jpg',
    path: '/pdf/good-digital-hygiene.pdf',
    gener: 'IT managment',
    rating: 0
     },
  { 
    title: 'Customer Care',
    auther: 'Frank Atkinson',
    descreption: ' is book has been written to help you become more successful in sales.',
    image: '/images/customer-care.jpg',
    path: '/pdf/customer-care.pdf',
    gener: 'Marketing',
    rating: 0
     },
  { 
    title: 'Personal Confidence & Motivation',
    auther: 'MTD Training',
    descreption: ' is book has been written to help you become more successful in sales.',
    image: '/images/personal-confidence-and-motivation.jpg',
    path: '/pdf/personal-confidence-and-motivation.pdf',
    gener: 'Personal Development',
    rating: 0
     } ]

},






template: `<div><search/></div>

<div><books  books="$ctrl.books"/></div>`
    
})





