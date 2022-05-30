var documenterSearchIndex = {"docs":
[{"location":"elements/#Markdown-AST-elements","page":"Markdown AST elements","title":"Markdown AST elements","text":"","category":"section"},{"location":"elements/","page":"Markdown AST elements","title":"Markdown AST elements","text":"Pages = [\"elements.md\"]","category":"page"},{"location":"elements/","page":"Markdown AST elements","title":"Markdown AST elements","text":"Modules = [MarkdownAST]\nPages = [\"markdown.jl\"]","category":"page"},{"location":"elements/#MarkdownAST.AbstractBlock","page":"Markdown AST elements","title":"MarkdownAST.AbstractBlock","text":"abstract type AbstractBlock <: AbstractElement\n\nSupertype of all Markdown AST block types.\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.AbstractElement","page":"Markdown AST elements","title":"MarkdownAST.AbstractElement","text":"abstract type AbstractElement\n\nA supertype of all Markdown AST element types.\n\nUser-defined elements must not directly inherit this type, but either AbstractBlock or AbstractInline instead.\n\nInterface\n\nBy default, each element is assumed to be a leaf element that can not contain other elements as children. An iscontainer method can be defined to override this.\ncan_contain can be overridden to constrain what elements can be the direct children of another node. By default, inline container elements can contain any inline element and block container elements can contain any block element.\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.AbstractInline","page":"Markdown AST elements","title":"MarkdownAST.AbstractInline","text":"abstract type AbstractInline <: AbstractElement\n\nSupertype of all Markdown AST inline types.\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.Admonition","page":"Markdown AST elements","title":"MarkdownAST.Admonition","text":"mutable struct Admonition <: AbstractBlock\n\nFields\n\n.category :: String: admonition category\n.title :: String: admonition title\n\nConstructors\n\nAdmonition(category :: AbstractString, title :: AbstractString)\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.BlockQuote","page":"Markdown AST elements","title":"MarkdownAST.BlockQuote","text":"struct BlockQuote <: AbstractBlock\n\nA singleton container element representing a block quote. It must contain other block elements as children.\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.Code","page":"Markdown AST elements","title":"MarkdownAST.Code","text":"mutable struct Code <: AbstractInline\n\nInline element representing an inline code span.\n\nFields\n\n.code :: String: raw code\n\nConstructors\n\nCode(code::AbstractString)\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.CodeBlock","page":"Markdown AST elements","title":"MarkdownAST.CodeBlock","text":"mutable struct CodeBlock <: AbstractBlock\n\nA leaf block representing a code block.\n\nFields\n\n.info :: String: code block info string (e.g. the programming language label)\n.code :: String: code content of the block\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.DisplayMath","page":"Markdown AST elements","title":"MarkdownAST.DisplayMath","text":"mutable struct DisplayMath <: AbstractBlock\n\nLeaf block representing a mathematical display equation.\n\nFields\n\n.math :: String: TeX code of the display equation\n\nConstructors\n\nDisplayMath(math :: AbstractString)\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.Document","page":"Markdown AST elements","title":"MarkdownAST.Document","text":"struct Document <: AbstractBlock\n\nSingleton top-level element of a Markdown document.\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.Emph","page":"Markdown AST elements","title":"MarkdownAST.Emph","text":"struct Emph <: AbstractInline\n\nInline singleton element for emphasis (e.g. italic) styling.\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.FootnoteDefinition","page":"Markdown AST elements","title":"MarkdownAST.FootnoteDefinition","text":"mutable struct FootnoteDefinition <: AbstractBlock\n\nContainer block representing the definition of a footnote, containing the definitions of the footnote as children.\n\nFields\n\n.id :: String: label of the footnote\n\nConstructors\n\nFootnoteDefinition(id :: AbstractString)\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.FootnoteLink","page":"Markdown AST elements","title":"MarkdownAST.FootnoteLink","text":"mutable struct FootnoteLink <: AbstractInline\n\nInline leaf element representing a link to a footnote.\n\nFields\n\n.id :: String: label of the footnote\n\nConstructors\n\nFootnoteLink(id :: AbstractString)\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.HTMLBlock","page":"Markdown AST elements","title":"MarkdownAST.HTMLBlock","text":"mutable struct HTMLBlock <: AbstractBlock\n\nA leaf block representing raw HTML.\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.HTMLInline","page":"Markdown AST elements","title":"MarkdownAST.HTMLInline","text":"mutable struct HTMLInline <: AbstractInline\n\nInline leaf element representing raw inline HTML.\n\nFields\n\n.html :: String: inline raw HTML\n\nConstructors\n\nHTMLInline(html::AbstractString)\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.Heading","page":"Markdown AST elements","title":"MarkdownAST.Heading","text":"mutable struct Heading <: AbstractBlock\n\nRepresents a heading of a specific level. Can only contain inline elements as children.\n\nFields\n\n.level :: Int: the level of the heading, must be between 1 and 6.\n\nConstructors\n\nHeading(level :: Integer)\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.Image","page":"Markdown AST elements","title":"MarkdownAST.Image","text":"mutable struct Image <: AbstractInline\n\nInline element representing a link to an image. Can contain other inline nodes that will represent the image description.\n\nFields\n\n.destination :: String: destination URL\n.title :: String: title attribute of the link\n\nConstructors\n\nLink(destination::AbstractString, title::AbstractString)\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.InlineMath","page":"Markdown AST elements","title":"MarkdownAST.InlineMath","text":"mutable struct InlineMath <: AbstractInline\n\nLeaf inline element representing an inline mathematical expression.\n\nFields\n\n.math :: String: TeX code for the inline equation\n\nConstructors\n\nInlineMath(math::String)\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.Item","page":"Markdown AST elements","title":"MarkdownAST.Item","text":"struct Item <: AbstractBlock\n\nSingleton container representing the items of a List.\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.Link","page":"Markdown AST elements","title":"MarkdownAST.Link","text":"mutable struct Link <: AbstractInline\n\nInline element representing a link. Can contain other inline nodes, but should not contain other Links.\n\nFields\n\n.destination :: String: destination URL\n.title :: String: title attribute of the link\n\nConstructors\n\nLink(destination::AbstractString, title::AbstractString)\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.List","page":"Markdown AST elements","title":"MarkdownAST.List","text":"mutable struct List <: AbstractBlock\n\nRepresents a Markdown list. The children of a List should only be Items, representing individual list items.\n\nFields\n\n.type :: Symbol: determines if this is an ordered (:ordered) or an unordered (:bullet) list.\n.tight :: Bool: determines if the list should be rendered tight or loose.\n\nConstructors\n\njulia List(type :: Symbol, tight :: Bool)`\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.Paragraph","page":"Markdown AST elements","title":"MarkdownAST.Paragraph","text":"struct Paragraph <: AbstractBlock\n\nSingleton container representing a paragraph, containing only inline nodes.\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.Strong","page":"Markdown AST elements","title":"MarkdownAST.Strong","text":"struct Strong <: AbstractInline\n\nInline singleton element for strong (e.g. bold) styling.\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.Table","page":"Markdown AST elements","title":"MarkdownAST.Table","text":"mutable struct Table <: TableComponent\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.TableCell","page":"Markdown AST elements","title":"MarkdownAST.TableCell","text":"mutable struct TableCell <: TableComponent\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.Text","page":"Markdown AST elements","title":"MarkdownAST.Text","text":"mutable struct Text <: AbstractInline\n\nInline leaf element representing a simply a span of text.\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.ThematicBreak","page":"Markdown AST elements","title":"MarkdownAST.ThematicBreak","text":"struct ThematicBreak <: AbstractBlock\n\nA singleton leaf element representing a thematic break (often rendered as a horizontal rule).\n\n\n\n\n\n","category":"type"},{"location":"elements/#MarkdownAST.can_contain","page":"Markdown AST elements","title":"MarkdownAST.can_contain","text":"can_contain(parent::AbstractElement, child::AbstractElement) -> Bool\n\nDetermines if the child element can be a direct child of the parent element.\n\nThis is used to constrain the types of valid children for some elements, such as for the elements that are only allowed to have inline child elements or to make sure that Lists only contain Items.\n\nIf the parent element is a leaf node (iscontainer(parent) === false)\n\n\n\n\n\n","category":"function"},{"location":"elements/#MarkdownAST.isblock","page":"Markdown AST elements","title":"MarkdownAST.isblock","text":"isblock(element::AbstractElement) -> Bool\n\nDetermines if element is a block element (a subtype of AbstractBlock).\n\n\n\n\n\n","category":"function"},{"location":"elements/#MarkdownAST.iscontainer","page":"Markdown AST elements","title":"MarkdownAST.iscontainer","text":"iscontainer(::T) where {T <: AbstractElement} -> Bool\n\nDetermines if the particular Markdown element is a container, meaning that is can contain child nodes. Adding child nodes to non-container (leaf) nodes is prohibited.\n\nBy default, each user-defined element is assumed to be a leaf node by default, and each container node should override this method.\n\n\n\n\n\n","category":"function"},{"location":"elements/#MarkdownAST.isinline","page":"Markdown AST elements","title":"MarkdownAST.isinline","text":"isinline(element::AbstractElement) -> Bool\n\nDetermines if element is an inline element (a subtype of AbstractInline).\n\n\n\n\n\n","category":"function"},{"location":"other/#Other","page":"Other","title":"Other","text":"","category":"section"},{"location":"other/","page":"Other","title":"Other","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"other/","page":"Other","title":"Other","text":"Modules = [MarkdownAST]\nPages = [\"MarkdownAST.jl\", \"astmacro.jl\", \"show.jl\", \"stdlib.jl\"]","category":"page"},{"location":"other/#MarkdownAST.@ast-Tuple{Any}","page":"Other","title":"MarkdownAST.@ast","text":"@ast markdown-node-expression\n\nA macro that implements a simple domain specific language to easily and explicitly construct a Markdown AST.\n\nThe markdown-node-expression must be either:\n\nA Markdown element (i.e. some AbstractElement object), such as a constructor call (e.g. Paragraph()), function call returning an element, or a variable pointing to an element.\nA do-block, with the function call part being an element (as above), and the contents of the do-block a sequence of other node expressions, i.e.\nelement do\n    child-node-expression-1\n    child-node-expression-2\n    ...\nend\n\nIn practice, a simple example might look something like\n\n@ast Document() do\n    Heading(1) do\n        \"Top-level heading\"\n    end\n    Paragraph() do\n        \"Some paragraph text\"\n    end\nend\n\nStrings are interpreted as Text(s) elements.\n\n\n\n\n\n","category":"macro"},{"location":"other/#Base.convert-Tuple{Type{MarkdownAST.Node}, Markdown.MD}","page":"Other","title":"Base.convert","text":"convert(::Type{Node}, md::Markdown.MD) -> Node\n\nConverts a standard library Markdown AST into MarkdownAST representation.\n\n\n\n\n\n","category":"method"},{"location":"node/#Tree-node-interface","page":"Tree node interface","title":"Tree node interface","text":"","category":"section"},{"location":"node/","page":"Tree node interface","title":"Tree node interface","text":"Pages = [\"node.md\"]","category":"page"},{"location":"node/","page":"Tree node interface","title":"Tree node interface","text":"Modules = [MarkdownAST]\nPages = [\"node.jl\"]","category":"page"},{"location":"node/#MarkdownAST.Node","page":"Tree node interface","title":"MarkdownAST.Node","text":"mutable struct Node{M}\n\nImplements a linked list type representation of a Markdown abstract syntax tree, where each node contains pointers to the children and parent nodes, to make it possible to easily traverse the whole tree in any direction. Each node also contains an \"element\", which is an instance of some AbstractElement subtype and can be accesses via the .element property, and contains the semantic information about the node (e.g. wheter it is a list or a paragraph).\n\nOptionally, each node can also store additional meta information, which will be an object of type M (see also the .meta property). By default, the node does not contain any extra meta information and M = Nothing.\n\nConstructors\n\nNode(element :: AbstractElement)\n\nConstructs a simple standalone node (not part of any tree) without any additional metadata (M = Nothing) containing the Markdown AST element c.\n\nNode{M}(element :: AbstractElement, meta :: M)\n\nConstructs a simple standalone node (not part of any tree) with the meta information meta, containing the Markdown AST element c.\n\nExtended help\n\nThere are various properties that can be used to access the details of a node. Many of them can not be set directly though, as that could lead to an inconsistent tree. Similarly, the underlying fields of the struct should not be accessed directly.\n\n.meta :: M: can be used to access or set the extra meta information of the node.\n.element :: T where {T <: AbstractElement}: can be used to access or set the element corresponding to the node\n.next :: Union{Node{M},Nothing}: access the next child node after this one, with the value set to nothing if there is no next child\n.previous :: Union{Node{M},Nothing}: access the previous child node before this one, with the value set to nothing if there is no such node\n.parent :: Union{Node{M},Nothing}: access the parent node of this node, with the value set to nothing if the node does not have a parent\n.children: an iterable object that can be used to acces and modify the children of the node\n\nThe .children field is implemented with a type that in turn implemement the iteration interface. However, the exact type information etc. is an implementation detail, and the one should only rely on the following documented APIs:\n\nThe following methods are implemented for .children: length, eltype, first, last, isempty\nAppending or prepending new children to a parent node can be done with the push! and pushfirst! methods\n\nOther ways to work with child nodes that do not directly reference .children are:\n\nTo add new children between others, the insert_after!, insert_before! functions can be used to insert new children relative to a reference child node.\nTo remove a child from a node, the unlink! function can be used on the corresponding child node.\n\nIn addition, there are other functions and methods that can be used to work with nodes and trees:\n\nQuerying information about the node: haschildren\nRemoving a node from a tree: unlink!\n\n\n\n\n\n","category":"type"},{"location":"node/#Base.eltype-Union{Tuple{Type{MarkdownAST.NodeChildren{T}}}, Tuple{T}} where T","page":"Tree node interface","title":"Base.eltype","text":"eltype(node.children) = Node{M}\n\nReturns the exact Node type of the tree, corresponding to the type of the elements of the .children iterator.\n\n\n\n\n\n","category":"method"},{"location":"node/#Base.first-Union{Tuple{MarkdownAST.NodeChildren{T}}, Tuple{T}} where T","page":"Tree node interface","title":"Base.first","text":"first(node.children) -> Node\n\nReturns the first child of the node :: Node, or throws an error if the node has no children.\n\n\n\n\n\n","category":"method"},{"location":"node/#Base.isempty-Tuple{MarkdownAST.NodeChildren}","page":"Tree node interface","title":"Base.isempty","text":"isemtpy(node.children) -> Bool\n\nCan be called on the .children field of a node :: Node to determine whether or not the node has any child nodes.\n\n\n\n\n\n","category":"method"},{"location":"node/#Base.last-Union{Tuple{MarkdownAST.NodeChildren{T}}, Tuple{T}} where T","page":"Tree node interface","title":"Base.last","text":"last(node.children) -> Node\n\nReturns the last child of the node :: Node, or throws an error if the node has no children.\n\n\n\n\n\n","category":"method"},{"location":"node/#Base.length-Tuple{MarkdownAST.NodeChildren}","page":"Tree node interface","title":"Base.length","text":"length(node.children) -> Int\n\nReturns the number of children of node :: Node.\n\nAs the children are stored as a linked list, this method has O(n) complexity. As such, to check there are any children at all, it is generally preferable to use isempty.\n\n\n\n\n\n","category":"method"},{"location":"node/#Base.push!-Union{Tuple{T}, Tuple{MarkdownAST.NodeChildren{T}, T}} where T<:MarkdownAST.Node","page":"Tree node interface","title":"Base.push!","text":"Base.push!(node.children, child::Node) -> Node\n\nAdds child as the last child node of node :: Node. If child is part of another tree, then it is unlinked from that tree first (see unlink!). Returns the iterator over children.\n\n\n\n\n\n","category":"method"},{"location":"node/#Base.pushfirst!-Union{Tuple{T}, Tuple{MarkdownAST.NodeChildren{T}, T}} where T","page":"Tree node interface","title":"Base.pushfirst!","text":"Base.pushfirst!(node.children, child::Node) -> Node\n\nAdds child as the first child node of node :: Node. If child is part of another tree, then it is unlinked from that tree first (see unlink!). Returns the iterator over children.\n\n\n\n\n\n","category":"method"},{"location":"node/#MarkdownAST.haschildren-Tuple{MarkdownAST.Node}","page":"Tree node interface","title":"MarkdownAST.haschildren","text":"haschildren(node::Node) -> Bool\n\nReturns true if node has any children nodes and false otherwise.\n\n\n\n\n\n","category":"method"},{"location":"node/#MarkdownAST.insert_after!-Tuple{MarkdownAST.Node, MarkdownAST.Node}","page":"Tree node interface","title":"MarkdownAST.insert_after!","text":"insert_after!(node::Node, sibling::Node) -> Node\n\nInserts a new child node sibling as the next child after node. node must not be a root node. If sibling is part of another tree, then it is unlinked from that tree first (see unlink!). Returns the original reference node.\n\n\n\n\n\n","category":"method"},{"location":"node/#MarkdownAST.insert_before!-Union{Tuple{T}, Tuple{T, T}} where T<:MarkdownAST.Node","page":"Tree node interface","title":"MarkdownAST.insert_before!","text":"insert_before!(node::Node, sibling::Node) -> Node\n\nInserts a new child node sibling as the child right before node. node must not be a root node. If sibling is part of another tree, then it is unlinked from that tree first (see unlink!). Returns the original reference node.\n\n\n\n\n\n","category":"method"},{"location":"node/#MarkdownAST.unlink!-Tuple{MarkdownAST.Node}","page":"Tree node interface","title":"MarkdownAST.unlink!","text":"unlink!(node::Node) -> Node\n\nIsolates and removes the node from the tree by removing all of its links to its neighboring nodes. Returns the updated node, which is now a single, isolate root node.\n\n\n\n\n\n","category":"method"},{"location":"#MarkdownAST","page":"Introduction","title":"MarkdownAST","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"The structure of a Markdown file can be represented as an abstract syntax tree. The MarkdownAST package defines a Julia interface for representing such trees to facilitate the interoperability between different packages that deal with Markdown documents in different ways.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"While the primary goal is to represent Markdown documents, the tree structure, implemented by the Node type and the AbstractElement subtypes, is intentionally generic and can also be used to represent more general documents.","category":"page"}]
}
