<template>
  <div>
         <div class="markdown-body">
        <h1>树</h1>
<p>标签（空格分隔）： 数据结构</p>
<h3>树</h3>
<p><strong>树</strong>是一种重要的数据结构，通过链表建立一棵树：</p>
<pre><div class="hljs"><code class="lang-java"><span class="hljs-comment">//树节点的定义</span>
<span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">TreeNode</span>&lt;<span class="hljs-title">T</span>&gt; </span>{
	<span class="hljs-keyword">public</span> T s;
	<span class="hljs-keyword">private</span> TreeNode&lt;T&gt; parent;
	<span class="hljs-keyword">public</span> List&lt;TreeNode&lt;T&gt;&gt; nodeList;
	
	<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">TreeNode</span><span class="hljs-params">(T str)</span></span>{
		s = str;
		parent = <span class="hljs-keyword">null</span>;
		nodeList = <span class="hljs-keyword">new</span> ArrayList&lt;TreeNode&lt;T&gt;&gt;();
	}
	<span class="hljs-function"><span class="hljs-keyword">public</span> TreeNode&lt;T&gt; <span class="hljs-title">getParent</span><span class="hljs-params">()</span></span>{
		<span class="hljs-keyword">return</span> parent;
	}
}</code></div></pre>
      </div>
  </div> 
</template>
