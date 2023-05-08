import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homeSettings',
  title: 'Home Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'ourTestimonial',
      title: 'Our Testimonial',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{ type: 'reference', to: { type: 'review' }, weak: true }],
    }),
  ],
});
