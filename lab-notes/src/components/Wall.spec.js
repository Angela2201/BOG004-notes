import { Wall } from './Wall';
import { render, screen } from '@testing-library/react'

describe('Testing Wall component', () => {
    it ('Debería pintar los componentes de Notes y ListNotes', () => {
        render(<Wall />);
        expect(screen.getByRole('heading')).toHaveTextContent('hello there') 
    })

})

