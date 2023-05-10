import { getGifs } from '../../src/helpers/GetGifs';


describe('GetGifs tests', () => { 
    
    
    test('should return 10 gifs', async () => {
        
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
        expect( gifs[0]).toEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String)
            }
        )
    
    });

    test('should return 0 elements', async () => {

    });



 })