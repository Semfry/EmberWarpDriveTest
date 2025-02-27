import Model, { attr } from '@ember-data/model';

export default class ContactModel extends Model {
  @attr('string') 'first-name';
  @attr('string') 'last-name';
  @attr('string') notes;
  @attr('string') title;
}
