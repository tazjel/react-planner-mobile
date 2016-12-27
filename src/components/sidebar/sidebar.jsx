import React, {PropTypes} from 'react';
import CommentBox from './comment-box';

export default function Sidebar({width, height}) {

    return (
        <aside style={{backgroundColor: "#28292D", display: "block", overflow: "scroll", width: width, height: height}}>

            <CommentBox
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula malesuada condimentum. Maecenas viverra fermentum elit vitae viverra. Pellentesque porttitor nibh sed justo egestas tempor. Etiam luctus mollis laoreet. Vestibulum erat enim, vulputate eget consequat vitae, blandit nec justo. Pellentesque scelerisque risus ut eleifend ullamcorper. Praesent ut hendrerit dolor. Donec malesuada interdum lorem. Duis cursus bibendum augue, sit amet tempus ex varius consectetur. Proin feugiat, arcu id sagittis venenatis, sapien mauris varius tortor, ac blandit erat justo ac ex. Aenean tempor felis est, in auctor diam aliquet in."}
                active={true } closeComment={console.log()} deleteComment={console.log()}
                modifyComment={console.log()}/>
            <CommentBox
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula malesuada condimentum. Maecenas viverra fermentum elit vitae viverra. Pellentesque porttitor nibh sed justo egestas tempor. Etiam luctus mollis laoreet. Vestibulum erat enim, vulputate eget consequat vitae, blandit nec justo. Pellentesque scelerisque risus ut eleifend ullamcorper. Praesent ut hendrerit dolor. Donec malesuada interdum lorem. Duis cursus bibendum augue, sit amet tempus ex varius consectetur. Proin feugiat, arcu id sagittis venenatis, sapien mauris varius tortor, ac blandit erat justo ac ex. Aenean tempor felis est, in auctor diam aliquet in."}
                active={false} closeComment={console.log()} deleteComment={console.log()}
                modifyComment={console.log()}/>
            <CommentBox
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula malesuada condimentum. Maecenas viverra fermentum elit vitae viverra. Pellentesque porttitor nibh sed justo egestas tempor. Etiam luctus mollis laoreet. Vestibulum erat enim, vulputate eget consequat vitae, blandit nec justo. Pellentesque scelerisque risus ut eleifend ullamcorper. Praesent ut hendrerit dolor. Donec malesuada interdum lorem. Duis cursus bibendum augue, sit amet tempus ex varius consectetur. Proin feugiat, arcu id sagittis venenatis, sapien mauris varius tortor, ac blandit erat justo ac ex. Aenean tempor felis est, in auctor diam aliquet in."}
                active={false} closeComment={console.log()} deleteComment={console.log()}
                modifyComment={console.log()}/>
            <CommentBox
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula malesuada condimentum. Maecenas viverra fermentum elit vitae viverra. Pellentesque porttitor nibh sed justo egestas tempor. Etiam luctus mollis laoreet. Vestibulum erat enim, vulputate eget consequat vitae, blandit nec justo. Pellentesque scelerisque risus ut eleifend ullamcorper. Praesent ut hendrerit dolor. Donec malesuada interdum lorem. Duis cursus bibendum augue, sit amet tempus ex varius consectetur. Proin feugiat, arcu id sagittis venenatis, sapien mauris varius tortor, ac blandit erat justo ac ex. Aenean tempor felis est, in auctor diam aliquet in."}
                active={false} closeComment={console.log()} deleteComment={console.log()}
                modifyComment={console.log()}/>

        </aside>

    )

}