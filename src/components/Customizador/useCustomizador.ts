
import {fabric} from 'fabric'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useFabricJSEditor } from 'fabricjs-react'
import { TextEditorHandler } from './TextEditor';

export const UseCustomizador = () => {
    
      const [ObjectCanvasLength, setObjectCanvasLength] = useState<number>(0);

      const TextEditorRef = useRef({} as TextEditorHandler);

      const [caseBackground, setCaseBackground] = useState<any>();
      const [imageBackground, setImageBackground] = useState<any>();
      let isDragging = false 

      const { editor, onReady } = useFabricJSEditor()


      const CanvaDialogContainer = useRef(null);
   
      useEffect(() => {
        if(editor){
        
          editor.canvas.setWidth((CanvaDialogContainer.current as any)?.clientWidth)
          editor.canvas.setHeight((CanvaDialogContainer.current as any)?.clientHeight);
     
        }
      
      },[editor])

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

      useEffect(() => {
       
        if(caseBackground){
          AddBackgroundImage(caseBackground);
        }
     
      },[caseBackground])
      
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
      var triangle = new fabric.Triangle();
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

      // editor?.canvas.on('mouse:down', function (event) {
      //   // Verifique se o objeto clicado é um objeto de texto
      //   if (event.target && event.target.type === 'text') {
      //     console.log('Clicou no texto:', event);
      //     // Faça algo quando clicar no texto
      //   }
      // });
    


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
            const img = new fabric.Image(image, {
                height: image.height,
                width: image.width,
                top: 0,
                left: 0,
            
            });

            setImageBackground(img);
            
            editor?.canvas.add(img);
          };
        };
       
        reader.readAsDataURL(file);

        AddObjectCanva()
       
    } 

    const onAddStickers = (imagePath: string) => {
      fabric.Image.fromURL(imagePath, function(oImg) {
      

        editor?.canvas.add(oImg);
      });


      AddObjectCanva()
    }

    const AddBackgroundImage = useCallback((path: string) => {
        
        fabric.Image.fromURL(path, function(oImg) {
       
          editor?.canvas.setBackgroundImage(oImg, editor?.canvas.renderAll.bind(editor?.canvas), {
            scaleX: 1718 / (oImg as any)?.width,
            scaleY: 827 / (oImg as any)?.height,
            originX: 'left',
            originY: 'top',
          });
        });  

       
    },[editor?.canvas])

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
        AddBackgroundImage,
        onReady,
        CanvaDialogContainer,
        ObjectCanvasLength,
        setCaseBackground,
        TextEditorRef,
    }
}