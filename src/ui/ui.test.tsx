import { App } from './ui';

describe('App', () => {
  it('should render component', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello Figma!')).toBeInTheDocument();
  });
});
