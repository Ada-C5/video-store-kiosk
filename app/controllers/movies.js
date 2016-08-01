
import Ember from 'ember';

export default Ember.Controller.extend({
 page: 1,
 size: 10,
 actions: {
   getNext(){
     // console.log(this.get('page'))
     this.set('page', (this.get('page')+1));

   },
   getPrev(){
     if (this.get('page')>1) {
       this.set('page', (this.get('page')-1));
     } else {
       console.log('first page!')
     }
   }
 }
});
