import { UserProfile } from "@/components/UserProfile";
import {render, screen} from '@testing-library/react';

describe('UserProfile - Rendering',()=>{
    it('should have text Email Verified when isEmailVerified is true',()=>{
        render(
            <UserProfile 
            displayName={'Developer'}
            username="ansonthedev"
            email="ansonthedev@ansonthedev.com"
            isEmailVerified={true}
            />
        )
        expect(screen.getByText(/Email Verified/)).toBeInTheDocument();
    });

    it('should have text Email Not Verified when isEmailVerified is false',()=>{
        render(
            <UserProfile 
            displayName={'Developer'}
            username="ansonthedev"
            email="ansonthedev@ansonthedev.com"
            isEmailVerified={false}
            />
        )
        expect(screen.queryByText('Email Verified')).not.toBeInTheDocument();
    });

    it('should have display name end with 3 dots when the length is greater than 30 characters',()=>{
        render(<UserProfile 
            displayName={'Xtarachieverdsfdgfhgjhkjlkcxvcbnmnm'}
            username={'sfjdgk'}
            email={'abc@gmail.com'}
            isEmailVerified={true}
        />)
        const displayNameSpanElement = screen.getByText(/Display Name/)
    })
})