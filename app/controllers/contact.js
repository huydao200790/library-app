import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { computed } from '@ember/object';
import { empty } from '@ember/object/computed';
import { or } from '@ember/object/computed';
export default Controller.extend({

  emailAddress: '',

  isValid: match('emailAddressC', /^.+@.+\..+$/),
  negValid: not('isValid'),
  isEmpty: empty('textC'),
  isDisabled: or('negValid','isEmpty'),

  actions: {

    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddressC')}`);
      this.set('responseMessage', `Thank you !!! We've just saved your email address: ${this.get('emailAddressC')}`);
      this.set('emailAddressC', '');
    }
  }

});
