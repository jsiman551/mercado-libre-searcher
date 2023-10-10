import React from 'react';
import { 
    EmptyResultsContainer,
    EmptyResultsText,
} from '@/constants/styles';

interface Props {
    message: String
}

const EmptyState = ({ message }: Props) => {
    return (
        <EmptyResultsContainer>
            <EmptyResultsText>
                {message}
            </EmptyResultsText>
        </EmptyResultsContainer>
    )
}

export default EmptyState;
