import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CollapsableSection from './CollapsableSection';
import { useIsMobile } from '../../hooks/useIsMobile';

jest.mock('../../hooks/useIsMobile', () => ({
  useIsMobile: jest.fn(),
}));

describe('CollapsableSection Component', () => {
  it('renders the CollapsableSection component on mobile', () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);

    render(
      <CollapsableSection title='Test Section'>
        <p>Content goes here.</p>
      </CollapsableSection>
    );

    const titleElement = screen.getByText('Test Section');
    expect(titleElement).toBeInTheDocument();

    const iconElement = screen.getByText('+');
    expect(iconElement).toBeInTheDocument();

    expect(screen.queryByText('Content goes here.')).not.toBeInTheDocument();

    fireEvent.click(titleElement);
    expect(screen.queryByText('Content goes here.')).toBeInTheDocument();

    fireEvent.click(titleElement);
    expect(screen.queryByText('Content goes here.')).not.toBeInTheDocument();
  });

  it('renders the CollapsableSection component on non-mobile', () => {
    (useIsMobile as jest.Mock).mockReturnValue(false);

    render(
      <CollapsableSection title='Test Section'>
        <p>Content goes here.</p>
      </CollapsableSection>
    );

    const titleElement = screen.getByText('Test Section');
    expect(titleElement).toBeInTheDocument();

    // On non-mobile, the title should be a LinkTitle and content should be rendered
    const linkTitleElement = screen.getByText('Test Section');
    expect(linkTitleElement).toBeInTheDocument();

    const contentElement = screen.getByText('Content goes here.');
    expect(contentElement).toBeInTheDocument();
  });
});
