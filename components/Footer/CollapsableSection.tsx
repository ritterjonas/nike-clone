import { useIsMobile } from '../../hooks/useIsMobile';
import {
  Collapsable,
  CollapsableContent,
  CollapsableIcon,
  CollapsableTitle,
  FooterSection,
  LinkTitle,
} from './CollapsableSection.styles';
import { useState } from 'react';

type CollapsableSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function CollapsableSection({
  children,
  title,
}: CollapsableSectionProps) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <FooterSection>
      {isMobile ? (
        <>
          <Collapsable onClick={() => setOpen(!open)}>
            <CollapsableTitle>{title}</CollapsableTitle>
            <CollapsableIcon>{open ? '–' : '+'}</CollapsableIcon>
          </Collapsable>
          {open && <CollapsableContent>{children}</CollapsableContent>}
        </>
      ) : (
        <>
          <LinkTitle>{title}</LinkTitle>
          {children}
        </>
      )}
    </FooterSection>
  );
}
