import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactUs',
  title: 'Contact Us',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'checked',
      title: 'Checked',
      type: 'boolean',
      description: `If you check this application, it should be marked as checked/*`,
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'mobile',
      title: 'Mobile',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      readOnly: true,
    }),
  ],
});
