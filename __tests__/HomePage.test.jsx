import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('Home Page - Rendering',()=>{
    describe('Rendering',()=>{
        it('should have home page text',()=>{
            render(<Home />);
            expect(screen.getByText('Home Page')).toBeInTheDocument();
        });
    
        it('should have button with text Click',()=>{
            render(<Home />);
            expect(screen.getByRole('button',{name: 'Click me'})).toBeInTheDocument();
        });
    
        it('should have input field with label Enter Random Text',()=>{
            render(<Home />);
            expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument();
            // expect(screen.getByRole('textbox')).toBeInTheDocument();
        });
    
        it('should have input field with label Enter Specific Text',()=>{
            render(<Home />);
            expect(screen.getByLabelText(/Specific/)).toBeInTheDocument();
        });
    
        it('should have placeholder text by Search',()=>{
            render(<Home />);
            expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
        })
    
        it('should not find element with text:Thisis the text',()=>{
            render(<Home/>);
            expect(screen.queryByText('This is the text')).not.toBeInTheDocument();
            // expect(screen.getByTestId('This is the text')).not.toBeInTheDocument()
        });
    })
    describe('Home Page Behavior', () => { 
        it('should click on show text button and find New Text',async()=>{
            render(<Home />);

            expect(screen.queryByText('This is the text!')).not.toBeInTheDocument();

            const showTextButton = screen.getByRole('button',{name: 'Show Text'});
            await  userEvent.click(showTextButton);
            expect(await screen.findByText('This is the text!',{},{timeout: 5000})).toBeInTheDocument();
            // expect(screen.queryByText('This is the text!')).not.toBeInTheDocument();
        })
     })
})
