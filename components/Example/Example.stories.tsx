import Example from './Example';

export default { title: 'Components/Example' };

export const heading = () => <Example text="Something" />;
export const children = () => (
  <Example text="Children">
    Some text as children
  </Example>
);