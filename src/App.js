import { useState } from 'react'
import './App.css'

const Feed = [
  {
    id: 1,
    source: '/mock feed/audi rs6.jpeg',
    description: 'Audi RS6',
    author: 'vladgrecanis',
    likes: 0
  },
  {
    id: 2,
    source: '/mock feed/audi rs7.jpeg',
    description: 'Audi RS7',
    author: 'vladgrecanis',
    likes: 0
  },
  {
    id: 3,
    source: '/mock feed/audi rs8.jpeg',
    description: 'Audi RS8',
    author: 'lucashenko',
    likes: 0
  },
  {
    id: 4,
    source: '/mock feed/audi rsq8.webp',
    description: 'Audi RSQ8',
    author: 'vladgrecanis',
    likes: 0
  },
  {
    id: 5,
    source: '/mock feed/bmw m4.webp',
    description: 'BMW M4',
    author: 'vladgrecanis',
    likes: 0
  },
  {
    id: 6,
    source: '/mock feed/vw passat.jpeg',
    description: 'VW PASSAT',
    author: 'nattymoganis',
    likes: 0
  }
]

function App() {
  const [feed, setFeed] = useState(Feed)

  return (
    <div className='container'>
      <div className='inner-container'>
        <img 
          src='/mock feed/instagram-logo.png'
          alt='logo'
          width={120}
          className='logo'
        />

        { feed.map((post) => (
          <div className='image-container' key={post.id}>
            <img 
              src={post.source}
              alt={post.description}
              className='image'
            />
            <div className='icons'>
              <div className='left-icons'>
                <img 
                  src='/iconite/heart-svgrepo-com.svg'
                  alt='heart'
                  className='icon'
                  style={{width: '24px'}}
                  onClick={() => {
                    setFeed(feed.map((element) => {
                      if ( element.id === post.id ) {
                        return { ...element, likes: element.likes + 1 }
                      } else {
                        return element
                      }
                    }))
                  }}
                />
                <img 
                  src='/iconite/comment-svgrepo-com.svg'
                  alt='comment'
                  className='icon'
                />
                <img 
                  src='/iconite/paper-plane-svgrepo-com.svg'
                  alt='paper plane'
                  className='icon'
                />
              </div>
              <img 
                src='/iconite/save-svgrepo-com.svg'
                alt='save'
                className='icon'
                style={{width: '26px'}}
              />
            </div>
            <p className='likes'>{post.likes} likes</p>
          </div>
        )) }
      </div>
    </div>
  )
}

export default App
