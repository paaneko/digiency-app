import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'comments',
  title: 'Comments',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: `Comments won't show without approval`,
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
    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      weak: true,
      to: [{ type: 'post' }, { type: 'project' }],
    }),
  ],
});
