from PIL import Image
import numpy as np
from stl import mesh

def convert_image(image):
    # convert image to greyscale format
    greyscale_image = Image.open(image).convert('L')

    # create a thumbnail for the image
    max_size = (500,500)
    max_height = 10
    min_height = 0
    greyscale_image.thumbnail(max_size)
    imageNp = np.array(greyscale_image)
    max_pix = imageNp.max()
    minPix = imageNp.min()

    (ncols, nrows) = greyscale_image.size
    vertices = np.zeros((nrows, ncols, 3))

    for x in range(0, ncols):
        for y in range(0, nrows):
            pixelIntensity = imageNp[y][x]
            z = (pixelIntensity * max_height) / max_pix
            #print(imageNp[y][x])
            vertices[y][x]=(x, y, z)

    faces=[]

    for x in range(0, ncols - 1):
        for y in range(0, nrows - 1):
            # create face 1
            vertice1 = vertices[y][x]
            vertice2 = vertices[y+1][x]
            vertice3 = vertices[y+1][x+1]
            face1 = np.array([vertice1,vertice2,vertice3])

            # create face 2 
            vertice1 = vertices[y][x]
            vertice2 = vertices[y][x+1]
            vertice3 = vertices[y+1][x+1]

            face2 = np.array([vertice1,vertice2,vertice3])

            faces.append(face1)
            faces.append(face2)
    
    facesNp = np.array(faces)
    surface = mesh.Mesh(np.zeros(facesNp.shape[0], dtype=mesh.Mesh.dtype))
    for i, f in enumerate(faces):
        for j in range(3):
            surface.vectors[i][j] = facesNp[i][j]
    
    surface.save('surface.stl')
    return surface