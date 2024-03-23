import React from 'react';
import Post from './post';

export default class NewsFeed extends React.Component{
    render(){
        let comments = [
            {content:'This is my first comment.',
             username:'Sammy',
             date:'12-17-2024'
            },

            {content:'This is my second comment.',
             username:'Tim',
             date:'12-18-2024'
            },

            {content:'This is my third comment.',
             username:'Kim',
             date:'12-19-2024'
            }
        ];

        return <div className='container'>
            <Post {...{comments:comments,content:'This is my post content!'}}/>
            <Post {...{content:'Here is another post!'}}/>
            <Post />
        </div>
    }
}