
import {fabric} from 'fabric'
import { useEffect, useRef, useState } from 'react'

import { useFabricJSEditor } from 'fabricjs-react'
import { TextEditorHandler } from './TextEditor';

export const UseCustomizador = () => {
    
      const [ObjectCanvasLength, setObjectCanvasLength] = useState<number>(0);

      const TextEditorRef = useRef({} as TextEditorHandler);

      const [_, setCaseBackground] = useState<any>({
        path: '',
        object: null,
      });
      const [imageBackground, setImageBackground] = useState<any>();
      let isDragging = false 

      const { editor, onReady } = useFabricJSEditor()


      const CanvaDialogContainer = useRef(null);
   
      useEffect(() => {
        if(editor){  
          editor.canvas.setWidth((CanvaDialogContainer.current as any)?.clientWidth);
          editor.canvas.setHeight((CanvaDialogContainer.current as any)?.clientHeight);
     
        }
      
      },[editor, CanvaDialogContainer.current])

      editor?.canvas.on('mouse:dblclick', function (event) {
       
        if (event.target &&(event.target as any).text && !isDragging) {
          TextEditorRef.current.handleReset(
            event.target,
            (event.target as any).text,
            {
              fontFamily:  (event.target as any).fontFamily,
              color: (event.target as any).fill,
            }
          )

          TextEditorRef.current.showModal();
       
          
        }
      });

      editor?.canvas.on('mouse:move', function () {
        isDragging = true
      });
      
      editor?.canvas.on('mouse:up', function () {
        isDragging = false;
      });

    //Functions
    const AddObjectCanva = () => {
      setObjectCanvasLength(ObjectCanvasLength + 1)
    }

    const RemoveObjectCanva = () => {
      setObjectCanvasLength(ObjectCanvasLength - 1)

      if((ObjectCanvasLength - 1) === 0) {
        setImageBackground(null);
      }
    }

    const onAddTriangle = () => {
      var triangle = new fabric.Triangle({
        width: 50,
        height: 50, 
      });
      editor?.canvas.add(triangle);
      
      AddObjectCanva()
    } 

    const onAddRectangle = () => {
      var rect = new fabric.Rect({
        width: 50,
        height: 50,
        fill: 'black',
        selectable: true,
      });

      editor?.canvas.add(rect);

      AddObjectCanva()
    };
  

    const onAddText = (text: string,  options?: any) => {
      const newText = new fabric.IText(text, {
        ...options,
        fill: options.color
      });
    
      editor?.canvas.add(newText);
      editor?.canvas.setActiveObject(newText);


      AddObjectCanva()
    } 

    const onEditText = (text: string,  options?: any) => {
      const activeObject = editor?.canvas.getActiveObject();
   
      (activeObject as any).set('text', text);
      (activeObject as any).set('fontFamily', options.fontFamily);
      (activeObject as any).set('fill', options.color);

      editor?.canvas.renderAll();
    }
    



    const onAddImage = (file: File) => {
        if(imageBackground){
          editor?.canvas.remove(imageBackground);
          setImageBackground(null);
        }
      
        const reader = new FileReader();
        reader.onload = function (e) {
          const image = new Image();
    
          image.src = String(e.target?.result);


          image.onload = function () {

  
            const scaleX = (editor as any)?.canvas.getWidth() / (image as any).width;
            const scaleY = (editor as any)?.canvas.getHeight() /(image as any).height;
            const scale = Math.max(scaleX, scaleY);
        
            
            
            const img = new fabric.Image(image, {
              left: (editor as any)?.canvas.getWidth() / 2 - ((image as any).width * scale) / 2,
              top: (editor as any)?.canvas.getHeight() / 2 - ((image as any).height * scale) / 2,
              scaleX: scale,
              scaleY: scale,
              selectable: true,
              evented: false,
              lockMovementY: true,
              lockRotation: true
            });

            

            setImageBackground(img);
            
            editor?.canvas.add(img);
          };
        };
       
        reader.readAsDataURL(file);

        AddObjectCanva()
       
    } 

    const onAddStickers = (imagePath: string) => {
      fabric.Image.fromURL(`../../${imagePath}`, function(oImg: any) {  
        const scaleX = (editor as any)?.canvas.getWidth() / (oImg as any).width;
        const scaleY = (editor as any)?.canvas.getHeight() /(oImg as any).height;
        const scale = Math.min(scaleX, scaleY);
    
        
        oImg.set({
          left: (editor as any)?.canvas.getWidth() / 2 - ((oImg as any).width * scale) / 2,
          top: (editor as any)?.canvas.getHeight() / 2 - ((oImg as any).height * scale) / 2,
          scaleX: scale,
          scaleY: scale,
          
        })

    

        editor?.canvas.add(oImg);

        editor?.canvas.bringForward(oImg);
      });


      AddObjectCanva()
    }


    const handleRemoveObject = () => {
      const activeObject = editor?.canvas.getActiveObject();

      if (activeObject) {
        editor?.canvas.remove(activeObject);
       
      }else {
        const objects = editor?.canvas.getObjects();

        const lastObject = (objects as any)[(objects as any).length - 1];

        editor?.canvas.remove(lastObject);
      }

      
      RemoveObjectCanva()
    };

    

    return {
        onAddTriangle,
        onAddRectangle,
        onAddText,
        onEditText,
        onAddImage,
        onAddStickers,
        handleRemoveObject,
        onReady,
        CanvaDialogContainer,
        ObjectCanvasLength,
        setCaseBackground,
        TextEditorRef,
    }
}