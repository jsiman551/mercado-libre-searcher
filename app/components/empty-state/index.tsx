import React from 'react';
import { 
    EmptyResultsContainer, 
    EmptyResultsText 
} from './styles';

interface Props {
    message: string
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
