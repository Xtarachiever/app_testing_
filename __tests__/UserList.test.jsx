import { UserList } from "@/components/UserList";
import { render, screen } from '@testing-library/react';

describe('UserList -Rendering',()=>{
    it('should have text anson',async ()=>{
        render(<UserList />);
        expect(await screen.findByText('anson')).toBeInTheDocument();
    })
    // expect(screen.getByText('anson')).toBeInTheDocument()
})