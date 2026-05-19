import React, { useState } from "react";
import * as S from "./accordion.styles";

interface AccordionItemProps {
  id: string;
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
  onToggle?: (id: string) => void;
  icon?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  content,
  isOpen = false,
  onToggle,
  icon,
}) => {
  return (
    <S.AccordionItemContainer>
      <S.AccordionHeader
        isOpen={isOpen}
        onClick={() => onToggle?.(id)}
      >
        <S.AccordionTitleWrapper>
          {icon && <S.AccordionIcon>{icon}</S.AccordionIcon>}
          <S.AccordionTitle>{title}</S.AccordionTitle>
        </S.AccordionTitleWrapper>
        <S.AccordionChevron isOpen={isOpen} />
      </S.AccordionHeader>

      <S.AccordionContent isOpen={isOpen}>
        <S.AccordionContentInner>
          {content}
        </S.AccordionContentInner>
      </S.AccordionContent>
    </S.AccordionItemContainer>
  );
};

interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const handleToggle = (id: string) => {
    const newOpenIds = new Set(openIds);

    if (newOpenIds.has(id)) {
      newOpenIds.delete(id);
    } else {
      if (!allowMultiple) {
        newOpenIds.clear();
      }
      newOpenIds.add(id);
    }

    setOpenIds(newOpenIds);
  };

  return (
    <S.AccordionContainer>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          {...item}
          isOpen={openIds.has(item.id)}
          onToggle={handleToggle}
        />
      ))}
    </S.AccordionContainer>
  );
};

export default Accordion;
