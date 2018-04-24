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
      alert(`Email: ${this.get('emailAddressC')} Message:: ${this.get('textC')} `);
      this.set('responseMessage', `We got your message`);
      this.set('emailAddressC', '');
      this.set('textC', '');
    }
  }

});
